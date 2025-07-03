import { prisma } from "../prisma/client.js";

// traer todas las categorias
async function allCategories(res) {
  const allCategories = await prisma.category.findMany();
  res.json(allCategories);
}

// crear una nueva categoria
async function createNewCategory(req, res) {
  const newCategory = await prisma.category.create({
    data: req.body
  });

  res.json(newCategory);
}

// traer una categoria por id
async function getOneCategory(req, res) {
  const categoryId = await prisma.category.findFirst({
    where: {
      id: +req.params.id
    },
    include: {
      products: true,
    }
  });

  res.json(categoryId);  
};

// eliminar una categoria por id
async function deleteOneCategory(req, res) {
  const deleteCategory = await prisma.category.delete({
    where: {
      id: +req.params.id
    }
  });

  res.json({
    message: "These category has been deleted successfully",
    deleteCategory
  });
};

// actualizar una categoria por id
async function updateOneCategory(req, res) {
  const updateCategory = await prisma.category.update({
    where: {
      id: +req.params.id
    },
    data: req.body
  })

  res.json({
    message: "These category has been updated successfully",
    updateCategory
  });
}


export {
  allCategories,
  createNewCategory,
  getOneCategory,
  deleteOneCategory,
  updateOneCategory
}