import { Router } from "express";
import { createNewProduct, allProducts } from '../../controllers/product.controller.js';
const router = Router();

//! LO MISMO CON LAS RUTAS, SOLO COLOQUE GET Y CREATE, YA QUE ES LO QUE ME INTERESA EXPERIMENTAR, Y NO QUIERO HACER UN CÓDIGO TAN LARGO, YA QUE ES LO MISMO QUE EN CATEGORIES

// router.get("/", (req, res) => {
//     res.send("lista de productos");
// })

// //params
// router.post('/:id', (req, res) => {
//     const { id } = req.params;
//     res.send(`create product with id: ${id}`);
// })

// //query
// router.get('/estado', (req, res) => {
//     const { estado } = req.query;
//     res.send(`list products with status: ${estado}`);
// })

// //body
// router.post('/new', (req, res) => {
//     const {nombre, precio} = req.body
//     res.json({
//         message: 'crear producto',
//         nombre,
//         precio
//     })
// })

//all products
router.get('/', async (req, res) => {
    allProducts(res);
});

//create product
router.post('/', async (req, res) => {
    createNewProduct(req, res);
});


/* // one product
router.get('/:id', (req, res) => {
   const id = req.params.id;
   const body = req.body
    productById(id, body, res);
});

// update product
router.put('/:id', (req, res) => {
    let param_id = +req.params.id;
    const data = req.body;
});

// // update product by id
// router.patch('/:id', (req, res) => {

// });

// delete product
router.delete('/:id', (req, res) => {
    let id = +req.params.id;
    deleteProduct(id, res);
}); */


export default router;