import React, { useEffect, useState } from 'react'
import type {product} from '../product'
import ProductCard from '../components/ProductCard';
import AddProductForm from '../components/AddProductForm';


  const products : product[] = [{
    name : "Trekking Shoes",
    id : 1,
    price : 5500, 
    brand : "decathlon",
    stock : 15
},
{
    name : "Jacket",
    id : 2,
    price : 8500, 
    brand : "Simond",
    stock : 3
},
{
    name : "Sun glasses",
    id : 3,
    price : 4200, 
    brand : "Oakley",
    stock : 0
},
];
const [items, setItems] = useState<product[]>([])




useEffect (() => {
const productList = localStorage.getItem('products');
const parsedProductlist : product[]= productList ?  JSON.parse(productList) : [];
setItems(parsedProductlist);
},[])

useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
},[items])

const Dashboard = () => {
  return (
    <div>
        <div>
            <ul>
                {items.map((product) => (
                <div key = {product.id}>
                    <ProductCard product={product}/>
                 </div>
            ))} 
            </ul>
            
        </div>
     <AddProductForm/>
    </div>
  )
}

export default Dashboard
