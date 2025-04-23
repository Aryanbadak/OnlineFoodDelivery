import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../exploreMenu1/ExploreMenu'
import Barnd from '../../Brand/Barnd'
import Fooddisplay from '../FoodDisplay/FoodDisplay'

const Home = (props) => {
  const [category, setCategory] = useState("All")
  document.title = `${props.home}`
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Barnd />
      <Fooddisplay category={category} />
    </div>
  )
}

export default Home
