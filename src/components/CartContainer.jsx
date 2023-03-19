import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className='max-w-4xl px-4 mx-auto py-10'>
        <h2 className='text-center text-2xl uppercase'>
          Your bag <br />
          <span className='text-base text-gray-600 tracking-wide lowercase'>
            is cuurently empty
          </span>
        </h2>
      </section>
    );
  }
  return (
    <section className='max-w-4xl px-4 mx-auto py-10'>
      <h2 className='text-center text-2xl uppercase mb-5'>your bag</h2>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
      <hr />
      <div className='flex justify-between items-center  py-3 text-sm'>
        <div>Total</div>
        <div className='bg-violet-500 text-white p-1  rounded px-1'>
          ${total.toFixed(2)}
        </div>
      </div>
      <div className='text-center mt-4'>
        <button
          onClick={() => {
            dispatch(openModal());
          }}
          className='capitalize py-1 px-3 rounded text-violet-600 bg-violet-200 hover:text-violet-200 hover:bg-violet-600 duration-300 tracking-wider text-sm'
        >
          clear cart
        </button>
      </div>
    </section>
  );
};
export default CartContainer;
