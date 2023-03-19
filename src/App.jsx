import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calculateAmount } from './features/cart/cartSlice';

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateAmount());
  }, [cartItems]);

  return (
    <>
      <main>
        <Navbar />
        <CartContainer />
      </main>
      {isOpen && <Modal />}
    </>
  );
};
export default App;
