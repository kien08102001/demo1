const { youModelRepository } = require('../models');
const createSlug = require('../slug/slug');

class YourController {
    static async getAllData(req, res) {
        try {
            const data = await youModelRepository.getAll();
            // console.log(1);
            res.render('course', {
                data
            });
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving data' });
        }
    }

    static async getBySlug(req, res, next) {

        const { slug } = req.params;

        try {
            const data = await youModelRepository.getBySlug(slug);
            res.render('course/getBySlug', {
                data
            });
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res) {
        res.render('course/create')
    }



    static async store(req, res) {
        const { videoID, name, description, level, image } = req.body; // Giả sử bạn muốn lưu slug, name và description
        const slug = createSlug(name);
        const course = { videoID, name, description, level, image, slug };
        try {
            // Thực hiện chèn bản ghi mới vào bảng KhoaHoc
            const result = await youModelRepository.insert(course);

            // Trả về phản hồi với ID của bản ghi vừa tạo
            if (Array.isArray(result) && result.length > 0) {
                return res.redirect('/course');
            } else {
                return res.status(500).json({ message: 'Không thể lấy ID bản ghi' });
            }
        } catch (error) {
            console.error('Lỗi khi lưu bản ghi:', error);
            return res.status(500).json({ message: 'Lưu bản ghi thất bại' });
        }

    }
    // [GET] /course/:id/edit
    static async edit(req, res) {
        const { id } = req.params;
        try {
            const data = await youModelRepository.getById(id);
            res.render('course/edit', {
                data
            });
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving data' });
        }
    }

    // [PUT] /course/:id
    static async update(req, res) {
        const { id } = req.params;
        const updatedData = req.body;
        try {
            const result = await youModelRepository.update(id, updatedData);

            if (result) {
                return res.redirect('/me/stored/course');
            } else {
                return res.status(500).json({ message: 'Không thể lấy ID bản ghi' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving data' });
        }
    }
    // [DELÊT] /course/:id

    static async destroy(req, res) {
        const { id } = req.params;
        const updatedData = req.body;
        try {
            const result = await youModelRepository.drop(id, updatedData);

            if (result) {
                return res.redirect('back');
            } else {
                return res.status(500).json({ message: 'Không thể lấy ID bản ghi' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving data' });
        }
    }
}


module.exports = YourController;
