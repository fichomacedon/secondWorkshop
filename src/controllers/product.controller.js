// import {
//   studentSchema,
//   updateStudentSchema,
// } from "../schemas/student.schema.js";
import { ProductService } from "../services/product.service.js";

export class ProductController {
  //1. Get all students
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts(req.query);

      res.json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error.message });
    }
  }
  //2. Get student by id
  static async getProductById(req, res) {
    try {
      const foundProduct = await ProductService.getProductById(req.params.id);

      res.json(foundProduct);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
  }
  //3. Create student
  static async createProduct(req, res) {
    try {
      // await studentSchema.validateAsync(req.body, {
      //   abortEarly: false,
      // });

      const product = await ProductService.createProduct(req.body);

      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  }
  //4. Update student
  static async updateProduct(req, res) {
    try {
      // await updateStudentSchema.validateAsync(req.body);

      const updatedProduct = await ProductService.updateProduct(
        req.params.id,
        req.body
      );

      res.json(updatedProduct);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  }
  //5. Delete student
  static async deleteProduct(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);

      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
  }
}
