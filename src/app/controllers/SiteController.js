
class SiteController {

    // [GET] /news
    index(req, res, next) {

        res.render('home');
    }

    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;