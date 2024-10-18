const db = require('../config/knex');

const getAll = async () => {
    try {
        const result = await db('KhoaHoc').select('*');
        console.log('Succsessfuly')
        return result
    } catch (error) {
        console.log(error);
    }
}

const getBySlug = async (slug) => {
    try {
        const result = await db('KhoaHoc').where('slug', slug).first(); // Use .first() to get a single record
        return result;
    } catch (error) {
        console.log(error);

    }
}

const getById = async (id) => {
    try {
        const result = await db('KhoaHoc').where('id', id).first(); // Use .first() to get a single record
        return result;
    } catch (error) {
        console.log(error);

    }
}

const insert = async (data) => {
    try {
        const result = await db('KhoaHoc').insert(data);
        return result;
        // Các phương thức khác có thể được thêm vào đây
    } catch (error) {
        console.log(error);
    }
}

const update = async (id, data) => {
    try {
        const result = await db('KhoaHoc').where('id', id).update(data);
        return result;
    } catch (error) {
        console.log(error);
    }
}

const drop = async (id, data) => {
    try {
        const result = await db('KhoaHoc').where('id', id).delete(data);
        return result;
    } catch (error) {
        console.log(error);
    }
}



// static async getById(id) {
//     return await db('KhoaHoc').where('id', id).first();
// }

module.exports = {
    getAll,
    getBySlug,
    insert,
    update,
    getById,
    drop
}
