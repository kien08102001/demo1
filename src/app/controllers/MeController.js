const { youModelRepository } = require('../models');


class MeController {

    // [GET] /me/stored/course
    storedCourse(req, res, next) {
        youModelRepository.getAll()
            .then((data) => {
                res.render('me/stored-course', {
                    data
                })
            }).catch(next);
    }


}

module.exports = new MeController;