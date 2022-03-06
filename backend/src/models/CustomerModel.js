// Import thư viện Moogoose
const mongoose = require("mongoose");

// Sử dụng phép gán phá hủy cấu trúc đối tượng để lấy thuộc tính Schema của mongoose
const { Schema } = mongoose;

// Khởi tạo Customer Schema MongoDB
const customerSchema = new Schema({
    _id: Schema.Types.ObjectId, // Trường _id có kiểu dữ liệu ObjectID

    fullName: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: false,
        //default: 0
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    timeCreated: {
        type: Date,
        default: Date.now
    },
    timeUpdated: {
        type: Date,
        default: Date.now
    },

})

//Tạo Customer Model
const CustomerModel = mongoose.model("Customer", customerSchema);

//Export Course Model
module.exports = { CustomerModel };