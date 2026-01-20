import { useForm } from 'react-hook-form'
import type { product } from '../product';


const AddProductForm = () => {
   
    const {register, handleSubmit,reset,formState:{errors} } = useForm({defaultValues:{
        name : '',
        price : 0,
        stock : 0

    }});
   
    const onSubmit = (data : any) => {
        const productList = localStorage.getItem('products');
        const parsedProductlist : product[]= productList ?  JSON.parse(productList) : [];
        const id = parsedProductlist.length > 0 ? Math.max(...parsedProductlist.map(p => p.id)) + 1 : 1;
        data.id = id;
        parsedProductlist.push(data)
        localStorage.setItem('products',JSON.stringify(parsedProductlist))
        alert('Product added succesfully')
        reset()
    }
  return (
    <div className='max-w-md mt-7 p-5 border rounded-lg'>
        <h3 className='font-bold'>Add New Product:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full border rounded-lg px-3 py-2'>
            <label htmlFor="name">Product name :</label>
            <input type="text" {...register("name",{ required: 'Product name is required...'})} />
        </div>

        <div className='w-full border rounded-lg px-3 py-2'>
            <label htmlFor="price">Product price :</label>
            <input type="text" {...register("price",{ required: 'Product price is required...',min:{
            value : 1,
            message : 'price cant be zero'
        }})}/>
        </div >
        
        <div className='w-full border rounded-lg px-3 py-2'>
            <label htmlFor="stock">Product stock :</label>
            <input type="text" {...register("stock",{ required: 'Product stock is required...'})}/>
        </div>
        
        <button>Add Product</button>
      </form>
    </div>
  )
}

export default AddProductForm
