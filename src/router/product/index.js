const express = require('express');
const router = express.Router();

const {listProduct } = require('../../data/product');
const productModel = require('../../models/product')
// get product list
router.get('/products' , (req , res) =>{
   return res.status(200).send(listProduct);
})
// add product 
router.post('/addProduct', (req ,res) =>{
    const newProduct = req.body;
    // listProduct.push(newProduct);
    const product = new productModel(newProduct);
    product.save().then( () => {
        console.log("Add Success !!!")
    })
    return res.status(201).send("Add Success !!!");
})
// Update product
router.put('/updateProduct/:id' ,(req , res) =>{
    const proId = req.params.id;
    const newProduct = req.body;
   for (let i = 0; i < listProduct.length; i++) {
        if(listProduct[i].id === proId)
            listProduct[i] = newProduct;
   }
    return res.status(200).send("Update Success !!!");

})
// Delete product
router.delete('/deleteProduct/:id', (req ,res) => {
    const proId = req.params.id;
    for (let i = 0; i < listProduct.length; i++) {
        if(listProduct[i].id === proId){
           listProduct.splice(i , 1)
        }  
    }
    return res.status(200).send("Delete Success !!!");

})

module.exports = router;