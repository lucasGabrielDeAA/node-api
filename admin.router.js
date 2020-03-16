const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

AdminBro.registerAdapter(AdminBroMongoose);


const Product = require('./src/models/Product');
const User = require('./src/models/User');

const adminBro = new AdminBro({
    resources: [Product, User],
})

dotenv.config({
    path: '.env',
});

const ADMIN = {
    email: process.env.ADMIN_EMAIL || 'superuser@example.com',
    password: process.env.ADMIN_PASSWORD || '123456',
};

// const router = AdminBroExpress.buildRouter(adminBro);

//Adding authentication
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: 'admin-bro',
    cookiePassword: 'some-password',
    authenticate: async (email, password) => {
        return ADMIN.password === password && ADMIN.email === email ? ADMIN : null;
    },
});


module.exports = router;
