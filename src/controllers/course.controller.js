// import { courseSchema } from "../schemas/course.schema.js";
import { OrderService } from "../services/order.service.js";

export class CourseController {
  //1.Get all courses
  static async getAllOrder(req, res) {
    try {
      const orders = await OrderService.getAllOrders();

      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error.message });
    }
  }
  //2. Get course by id
  static async getOrderById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);

      res.json(order);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message });
    }
  }
  //3. Create course
  static async createCourse(req, res) {
    try {
      await courseSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      const createdCourse = await CourseService.createCourse(req.body);

      res.status(201).json(createdCourse);
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: error.message });
    }
  }
}
