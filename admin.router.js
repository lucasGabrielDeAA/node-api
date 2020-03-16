const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose');
const mongoose = require('mongoose');

AdminBro.registerAdapter(AdminBroMongoose);


const Product = require('./src/models/Product');

const adminBro = new AdminBro({
    resources: [Product],
})

const ADMIN = {
    email: process.env.ADMIN_EMAIL || 'superuser@example.com',
    password: process.env.ADMIN_PASSWORD || '123456',
};

//Adding authentication
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: 'admin-bro',
    cookiePassword: 'some-password',
    authenticate: async (email, password) => {
        return ADMIN.password === password && ADMIN.email === email ? ADMIN : null;
    },
});

module.exports = router;
