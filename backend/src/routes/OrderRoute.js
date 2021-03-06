const express = require("express");

const router = express.Router();

const { getAllOrders, getOrderById, updateOrderByID, deleteOrderByID } = require("../controllers/OrderController");
const {createOrderDetail, getAllOrderDetailOfOrder} = require("../controllers/OrderDetailController")

router.get('/', getAllOrders);

router.get("/:orderId", getOrderById);

router.put("/:orderId", updateOrderByID);

router.delete("/:orderId", deleteOrderByID);

router.post('/:orderId/:productId/orderDetails', createOrderDetail);

router.get('/:orderId/orderDetails', getAllOrderDetailOfOrder);

module.exports = router;