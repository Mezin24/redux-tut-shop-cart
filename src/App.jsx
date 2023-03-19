import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calculateAmount, getCartItems } from './features/cart/cartSlice';

const App = () => {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateAmount());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <>
      <main>
        <Navbar />
        {isLoading ? (
          <h1 className='mt-10 text-center font-bold text-2xl'>Loading...</h1>
        ) : (
          <CartContainer />
        )}
      </main>
      {isOpen && <Modal />}
    </>
  );
};
export default App;
