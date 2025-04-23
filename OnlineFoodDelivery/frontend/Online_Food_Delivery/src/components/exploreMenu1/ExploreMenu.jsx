import React from 'react'
import './exploremenu.css'
import { menu_lists } from '../../assets/image/Assets'
import { Scrollbar } from 'react-scrollbars-custom'

function ExploreMenu({ category, setCategory }) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h2>Inspiration for your first order</h2>
            <div className='overflowScroll'>
                <div className="explore-menu-list">
                    {menu_lists.map((item, index) => {
                        return (
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item" key={index}>
                                <img src={item.menu_image}
                                    className={category === item.menu_name ? "active" : ""} alt='' />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ExploreMenu