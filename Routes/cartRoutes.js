const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const cartApi = require('../Apis/apiCart')
//fetch all records
router.get("/fetchcart", cartApi.carts_all)
//insert a record
router.post("/insertcart", cartApi.insert_cart)
//update a record
router.put("/updatecart", cartApi.update_cart)
//delete a record
router.delete("/deletecart", cartApi.delete_cart)
//export router
module.exports = router