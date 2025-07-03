import { Router } from "express";
import { allCategories, createNewCategory, getOneCategory, deleteOneCategory, updateOneCategory } from "../../controllers/category.controller.js";

const router = Router();

// all categories
router.get("/", async (req, res) => {
    allCategories(res);
});

// create category
router.post("/", async (req, res) => {
    createNewCategory(req, res);
});

// get one product by id
router.get("/:id", (req, res) => {
    getOneCategory(req, res)
});

//delete one product by id
router.delete("/:id", (req, res) => {
    deleteOneCategory(req, res);
});

// update one product by id
router.put('/:id', (req, res) => {
    updateOneCategory(req, res);
});

export default router;