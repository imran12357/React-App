 import ProductItem from './ProductItem'
 const ProductList =()=>{
     const cart=[]
 const onaddclick =(product)=>{
      cart.push(product)
      console.log(cart)
 }    

const Products =[{id:1,brand:'iphone',model:'xs',price:300,instock:true,img:"https://i5.walmartimages.com/asr/cde7fe31-78c2-434c-bbd0-e3acd8d7e9ff.ebd2fccd1adf37e03140ece924ecd221.jpeg"},
           {id:2,brand:'iphone',model:'iphone 11',price:500,instock:false,img:"https://th.bing.com/th/id/R.bd662b49f2ea9af86b7dc09013a6014e?rik=MOYJ6Zd8r5MhSg&riu=http%3a%2f%2fgeniusmobile.lk%2fwp-content%2fuploads%2f2019%2f09%2fblack-11.jpg&ehk=JIzfWSkjjtb%2berR8QJUwavLzW1HmiBGkRJZkNBwl4Y8%3d&risl=&pid=ImgRaw&r=0"},
           {id:3,brand:'iphone',model:'iphone 12',price:600,instock:true,img:"https://shop.jtglobal.com/wp-content/uploads/2020/10/iphone-12-red.jpg"}]

return Products.map((Products)=> <ProductItem   Products={Products} onadd ={onaddclick}/>)
}

export default ProductList