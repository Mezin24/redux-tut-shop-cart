import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='flex my-5 gap-5'>
      <img src={img} alt={title} className='w-20 h-20 ' />
      <div className='flex flex-col justify-center items-start flex-1'>
        <h4 className='tracking-widest text-gray-600 font-bold capitalize'>
          {title}
        </h4>
        <p className='text-gray-500'>${price}</p>
        <button
          onClick={() => dispatch(removeItem(id))}
          className='text-violet-500 text-sm tracking-widest'
        >
          remove
        </button>
      </div>
      <div className='flex flex-col justify-center gap-1 items-center'>
        <button
          className='hover:text-violet-800 text-violet-500'
          onClick={() => dispatch(increase(id))}
        >
          <FaChevronUp />
        </button>
        <p>{amount}</p>
        <button
          className='hover:text-violet-800 text-violet-500'
          onClick={() =>
            amount === 1 ? dispatch(removeItem(id)) : dispatch(decrease(id))
          }
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
