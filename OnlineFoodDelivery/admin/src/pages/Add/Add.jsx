import React, { useEffect, useState } from 'react'
import './add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add(props) {
  const url = "http://localhost:4000"
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", data.price)
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData)
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
  }
  document.title = `${props.add} - Online Food Delivery`

  return (
    <div className='add'>
      <div className='container'>
        <form className="add-form " onSubmit={onSubmitHandler}>
          <div className="add-img-upload flex-col ">
            <p>Upload Image</p>
            <label htmlFor='image'>
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
            </label>
            <input type='file' onChange={(e) => setImage(e.target.files[0])} />
            <div className="add-product-name flex-col">
              <p>Product Name</p>
              <input type='text' onChange={onChangeHandler} value={data.name} name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description flex-col">
              <p>Product Description</p>
              <textarea name='description' value={data.description} onChange={onChangeHandler} rows='6' placeholder='Write content'></textarea>
            </div>
            <div className="add-category-price">
              <div className="add-category flex-col">
                <p>Select Category</p>
                <select name='category' onChange={onChangeHandler}
                  value={data.category}>
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Deserts">Deserts</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>
                  <option value="Sweet">Sweet</option>
                  <option value="Nogveg">Nonveg</option>
                </select>
              </div>
              <div className="add-price flex-xol">
                <p style={{ paddingBottom: '10px' }}>Product Price</p>
                <input type='number' value={data.price} onChange={onChangeHandler} name='price' placeholder='$20' />
              </div>
            </div>
            <button className='add-btn' type='submit'>ADD</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Add
