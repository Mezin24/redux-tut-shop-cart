import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return createPortal(
    <div className='fixed top-0 bottom-0 left-0 right-0   flex flex-col justify-center'>
      <div
        className='w-full h-full bg-gray-900 opacity-70'
        onClick={() => dispatch(closeModal())}
      ></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5  opacity-100 w-[400px] mx-auto rounded text-center'>
        <h3 className='text-lg font-semibold mb-4'>
          Want to delete all the items?
        </h3>
        <div className='flex justify-between'>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            className='px-2 tracking-wider uppercase cursor-pointer rounded duration-300 text-sm border border-blue-400 text-blue-500 hover:bg-blue-700 hover:text-blue-100'
          >
            Close Modal
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
              dispatch(clearCart());
            }}
            className='px-2 tracking-wider uppercase cursor-pointer rounded duration-300 text-sm border border-red-400 text-red-500 hover:bg-red-700 hover:text-red-100'
          >
            Delete all Items
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};
export default Modal;
