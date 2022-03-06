import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import ProductList from './ProductList'
import 'font-awesome/css/font-awesome.css'


function App(){
  //  const h1= React.createElement('h1',{},'hello world')
  //  const img =React.createElement('img',{width:800,height:800,src:'https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-3.jpg'})
  //  const div = React.createElement('div',{},[h1,img]);
   return <div>

      <Navbar/>
      <ProductList/>
    
   </div>
}
export default App