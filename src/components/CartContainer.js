import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import cartItems from '../cartItems'

const CartContainer = () => {
    const {CartItems, total, amount} = useSelector((store)=>store.cart)

    if(amount < 1){
        return(
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'> is currently empty</h4>
                </header>
            </section>
        )
    }
  return (
    <section className='cart'>
        <header><h2>your bag</h2></header>
        <div>
            {cartItems.map((item)=>{
                return <CartItem key={item.id}/>
            })}
        </div>
    </section>
  )
}

export default CartContainer
