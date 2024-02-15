import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITEM_IMG_CDN_URL } from '../utils/constants'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const cartItems = useSelector((store) => store.cart.items)
  
  return (
    <div className='m-4 p-4 text-center'>
      <h1 className='font-bold'>Cart</h1>
      <div>
        <button onClick={handleClearCart}>Clear Cart</button>
      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <p className="menu-count">
              {cartItems.length} ITEMS
            </p>
          </div>
          <div className="menu-items-list">
            {cartItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn"
                  onClick={() => handleAddItem(item)}> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart