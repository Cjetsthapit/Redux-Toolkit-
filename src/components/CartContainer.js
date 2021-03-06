import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { toggleModal } from '../features/modal/modalSlice';

const CartContainer = () => {
    const {amount,cartItems,total}= useSelector((state)=>state.cart);
   
    const dispatch = useDispatch();
    if (amount <1){
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
          )
    }else{
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                </header>
                <div>
                    {cartItems.map(item=>{
                        return <CartItem key={item.id} {...item}/>
                    })}
                </div>
                <footer>
                    <hr/>
                    <div className='cart-total'>
                        <h4>
                            total <span>${total}</span>
                        </h4>
                    </div>
                    <button className='btn clear-btn' onClick={()=>{
                        dispatch(toggleModal());
                    }}>clear cart</button>
                </footer>
            </section>
          )
    }
 
}

export default CartContainer