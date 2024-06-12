const Cart = require('../Models/carts')
const carts_all = async(req,res)=>{
    try{
        const carts = await Cart.find()
        console.log('Data Sent')
        res.json(carts)
    }
    catch(error){
        console.log('Fetch error :-',error)
        res.json({'message':error})
    }
}
const insert_cart = async (req, res) => {
    const carts = new Cart({
        p_id: req.body.p_id,
        p_img : req.body.p_img,
        p_cost: req.body.p_cost,
        u_name: req.body.u_name,
        p_qty: req.body.p_qty
    })
    try {
        const savedCart = await carts.save()
        console.log('Product inserted')
        res.send(savedCart)
    }
    catch (error) {
        res.status(400).send(error)
    }
}

const update_cart = async (req, res) => {
    let p_id = req.body.p_id;
    let u_name = req.body.u_name;  // Extract u_name from the request body

    const carts = {
        p_qty: req.body.p_qty
    };

    try {
        const updatecart = await Cart.updateOne(
            { p_id, u_name }, // Check both p_id and u_name
            carts
        );

        if (updatecart.modifiedCount != 0) {
            console.log('Product Updated', updatecart);
            res.send({ 'update': 'success' });
        } else {
            console.log('Product not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    } catch (error) {
        console.error('Error updating cart:', error);
        res.status(400).send(error);
    }
};
//delete product
const delete_cart = async (req, res) => {
    let p_id = req.body.p_id
    let u_name = req.body.u_name
    try {
        const deletedcart = await Cart.deleteOne({ p_id , u_name })
        if (deletedcart.deletedCount != 0) {
            console.log('Product Deleted')
            res.send({ 'delete': 'success' })
        }
        else {
            console.log('Product Not deleted')
            res.send({ 'delete': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    carts_all,
    insert_cart,
    update_cart,
    delete_cart
}