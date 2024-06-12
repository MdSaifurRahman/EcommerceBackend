const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const userApi = require('../Apis/apiLogin')

router.get('/find',userApi.userfind)
router.post('/insert',userApi.insert_user)
router.put('/update',userApi.update_user)
router.delete('/delete',userApi.delete_user)

module.exports = router