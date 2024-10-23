const express = require('express');
const YourController = require('../app/controllers/yourController');

const router = express.Router();
router.get('/create', YourController.create);
router.post('/store', YourController.store);
router.get('/:slug', YourController.getBySlug);
router.get('/:id/edit', YourController.edit);
router.post('/handle-form-actions', YourController.handleFormActions);
router.put('/:id', YourController.update);
router.delete('/:id', YourController.destroy);
router.get('/', YourController.getAllData);

module.exports = router;
