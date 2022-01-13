'use strict'
const userRoutes = require('./user.route');

const createRoutes = (app) =>{
    app.use('/api/users', userRoutes);
}

module.exports = createRoutes;