const mongoose = require('mongoose')
//create schema
const cartSchema = new mongoose.Schema({
    p_id: Number,
    p_img : String,
    p_cost: Number,
    u_name: String,
    p_qty: Number
})
module.exports = mongoose.model("carts", cartSchema)
