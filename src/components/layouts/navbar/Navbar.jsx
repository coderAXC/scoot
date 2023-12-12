import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { Button } from "../../common/button/Button";
import logo from "/mock-imges/icons/logo.svg";

const Navbar = () => {
  return (
    <div className='flex justify-center items-center lg:px-20'>
                <div className='md:mr-auto flex'>
                    <NavLink to="/"><img className='mx-auto my-9 md:ml-10' src={logo} alt="logo" /></NavLink>
                    <ul className='hidden md:flex md:justify-center md:items-center md:ml-5'>
                    <NavLink to="/about"><li className='p-3 text-globalDark font-700 font-space-bold text-xl cursor-pointer'>About</li></NavLink>
                    <NavLink to="/locations"><li className='p-3 text-globalDark font-700 font-space-bold text-xl cursor-pointer'>Locations</li></NavLink>
                    <NavLink to="/careers"><li className='p-3 text-globalDark font-700 font-space-bold text-xl cursor-pointer'>Careers</li></NavLink>
                    </ul>
                </div>
                <div className='hidden md:block md:ml-auto md:mr-10'>
                    <Button>Get Scootin</Button>
                </div>
        </div>
  );
};

export default Navbar;
