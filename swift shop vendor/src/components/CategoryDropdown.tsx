import React, { useEffect, useState } from 'react'


const CategoryDropdown = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [selectedcategory, setselectedcategory] = useState<string>('')
    useEffect (() => {
        const getCategories = async () =>{
            
                const response = await fetch('https://dummyjson.com/products/category-list')                                
                const data : string[] = await response.json() 
                setCategories(data);  
        }   
        getCategories();
       
    },[])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setselectedcategory(event.target.value)
      console.log(selectedcategory)
    }
  return (
    <div>
      <label htmlFor="categories">Select category here:</label>
      <select id="category dropdown"
              className='bg-white, shadow-lg, rounded-md, ring-1 ring-black ring-opacity-5, p-2, w-48'
              value={selectedcategory}
              onChange={handleChange}
                >
                <option value="">All</option>

                {categories.map((category) => (
                  <option key={category} value="category">{category}</option>
                  
                ))}

              </select>
    </div>
  )
}

export default CategoryDropdown