import React from 'react'
import { ChevronUp,ChevronDown } from '../icons'
import { useDispatch } from 'react-redux'
import { removeItem,increase,decrease, calculateTotals } from '../features/cart/cartSlice'
const CartItem = ({id,img, title, price,amount}) => {
    const dispatch = useDispatch();

  return (
    <article className='cart-item'>
        <img src={img} alt={title}></img>
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            <button className='remove-btn' onClick={()=>dispatch(removeItem(id))}>remove</button>
        </div>
        <div>

        <div className='amount-btn' onClick={()=>dispatch(increase({id}))}>
            <ChevronUp />
        </div>
        <p className='amount'>{amount}</p>
        <div className='amount-btn' onClick={()=>{
            if (amount === 1){
                dispatch(removeItem(id))
                return;
            }
                dispatch(decrease({id}))
            
        }}>
            <ChevronDown/>
        </div>
        </div>
    </article>
  )
}

export default CartItem