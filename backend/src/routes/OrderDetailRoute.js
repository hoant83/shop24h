const express = require("express");

const router = express.Router();

const {getOrderDetailById, updateOrderDetailByID, deleteOrderDetailByID} = require("../controllers/OrderDetailController")

router.get("/:orderDetailId", getOrderDetailById);

router.put("/:orderDetailId", updateOrderDetailByID);

router.delete("/:orderDetailId", deleteOrderDetailByID);

// router.post('/:orderId/:productId/orderDetails', createOrderDetail);

// router.get('/:orderId/orderDetails', getAllOrderDetailOfOrder);

module.exports = router;