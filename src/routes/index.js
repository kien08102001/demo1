const newsRouter = require('./news');
const siteRouter = require('./sites');
const meRouter = require('./me');
const yourRoutes = require('./yourRoutes');


function route(app) {


    app.use('/news', newsRouter);

    app.use('/course', yourRoutes);

    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;