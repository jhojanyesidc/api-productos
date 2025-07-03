import express from 'express';
import categoriesRoutes from "./routes/category/categories.routes.js";
import productRoutes from "./routes/product/products.routes.js";

const app = express();
app.use(express.json())
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);

  //registro de rutas
  app.use('/categories', categoriesRoutes);
  app.use('/products', productRoutes);
});