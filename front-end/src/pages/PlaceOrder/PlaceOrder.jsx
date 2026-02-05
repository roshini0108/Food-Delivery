import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext)
    const deliveryFee = 2; // fixed: now defined

    return (
        <form className='place-order'>
            {/* Left Section - Delivery Form */}
            <div className="place-order-left">
                <p className="title">Delivery Information</p>

                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>

                <input type="text" placeholder='Email Address' />
                <input type="text" placeholder='Street' />

                <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>

                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>

                <input type="text" placeholder='Phone' />
            </div>

            {/* Right Section - Cart Totals */}
            <div className="place-order-right">
                <div className="cart-total">
                    <h3>Cart Totals</h3>

                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                    </div>
                    <div className="cart-total-details total">
                        <b>Total</b>
                        <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                    </div>

                    <button type="button">Proceed to Payment</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
