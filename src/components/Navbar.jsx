import { SlHandbag } from 'react-icons/sl';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav className='bg-violet-600 text-white py-5'>
      <div className='max-w-4xl px-4 mx-auto flex justify-between items-center'>
        <h1 className='font-bold tracking-wider text-lg'>ReduxToolkit</h1>
        <button className='  relative'>
          <SlHandbag className='text-violet-200 w-7 h-7' />
          <span className='absolute w-4 h-4 grid place-content-center rounded-full bg-violet-100 border text-violet-500 font-bold -right-1 -top-1 text-sm'>
            {amount}
          </span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
