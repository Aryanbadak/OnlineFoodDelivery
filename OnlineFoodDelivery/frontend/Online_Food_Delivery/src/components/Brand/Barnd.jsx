import React from 'react'
import './Barnd.css'
import { menu_list_brands } from '../../assets/image/Assets'
const Barnd = () => {
    return (
        <div className='explore-menu row' id='explore-menu'>
            <h2>Top brands for you</h2>
            <div className='overflowscroll'>
                <div className="explore-menu-list">
                    {menu_list_brands.map((item, index) => {
                        return (
                            <div className="explore-menu-list-item" key={index}>
                                <img src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Barnd
