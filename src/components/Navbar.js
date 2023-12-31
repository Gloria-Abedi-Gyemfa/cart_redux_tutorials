import React from 'react'
import { CartIcon, Testing } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const {amount} = useSelector((store)=>store.cart)
  return (
    <div>
      <nav className='nav-center'>
        <h3>Redux toolkit</h3>
        <div className='nav-container'>
            <CartIcon/>
            <div className='amount-container'>
                <p className='total-amount'>{amount}</p>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
