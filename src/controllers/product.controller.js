
import { prisma } from "../prisma/client.js";


// traer todos los productos
async function allProducts(res) {
  const allProducts = await prisma.product.findMany();
  res.json({

    message: "These are all available products",
    allProducts
  });
}

// crear un nuevo producto
async function createNewProduct(req, res) {
  const createNewProduct = await prisma.product.create({
    data: req.body
  });
  res.json(createNewProduct);
}



export {
  createNewProduct,
  allProducts,

}