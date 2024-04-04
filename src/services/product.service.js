import { Product } from "../models/product.model.js";

export class ProductService {
  //1. Get all students
  static async getAllProducts(filters) {
    console.log(filters);

    //students?sortBy=age&orderBy=asc&age=40

    const { sortBy, orderBy, firstResult, maxResults, ...basicFilters } =
      filters;

    const sortFilters = {};

    if (sortBy === "age") {
      if (orderBy === "asc") sortFilters.age = 1;
      if (orderBy === "desc") sortFilters.age = -1;
    }

    if (basicFilters.age) basicFilters.age = { $gte: Number(basicFilters.age) };

    const products = await Product.find(basicFilters)
      .sort(sortFilters)
      .limit(maxResults ? Number(maxResults) : 10)
      .skip(firstResult ? Number(firstResult) - 1 : 0);

    const count = await Product.countDocuments();

    return {
      products,
      totalRecords: count,
    };
  }
  //2. Get product by id
  static async getProductById(productId) {
    const foundProduct = await Product.findById(productId);

    if (!foundProduct) throw new Error("Product Not Found");

    return foundProduct;
  }
  //3. Create product
  static async createProduct(productData) {
    // New product here is not a plain object but it is a mongoose document which contains a lot more methods and information
    // const newProduct = new Product(studentData);
    // save valdiates and then if everything is okay writes the new document in the database
    // const createdStudent = await newStudent.save();

    //Shortened way of doing the above
    const createdProduct = Product.create(productData);

    return createdProduct;
  }
  //4. Update student
  static async updateProduct(productId, updateData) {
    const foundProduct = await this.getProductById(productId);

    // Object assign takes the target object and addes the properties of the second object to it
    Object.assign(foundProduct, updateData);

    //Saving after updates validates the data before writing it to the database
    const updatedProduct = await foundProduct.save();

    return updatedProduct;
  }

  //5. Delete
  static async deleteProduct(productId) {
    const response = await Product.findByIdAndDelete(productId);

    if (!response) throw new Error("Product not found");

    console.log(response);
  }
}
