'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/tags/:tag',controller.getByTag)
router.get('/admin/:id',controller.getById)
router.get('/',controller.get); 
router.get('/:slug',controller.getBySlug);  
router.post('/',controller.post);
router.put('/:id',controller.put);
router.delete('/',controller.delete);
    
module.exports = router;