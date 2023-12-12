import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import logo from "/mock-imges/icons/logo.svg";
import facebookbadge from '/public/mock-imges/icons/facebook.svg'
import instagrambadge from '/public/mock-imges/icons/Insta.svg'
import twitterbadge from '/public/mock-imges/icons/twitter.svg'
import appStore from '/public/mock-imges/icons/apple.svg'
import googlePlay from '/public/mock-imges/icons/google.svg'

export const Footer = () => {
  return (
    <>
    <div className='bg-globalDark py-20 px-5 bg-bg-pattern-semicircle bg-repeat-x bg-[left_-600px_bottom] md:bg-no-repeat md:bg-bottom lg:flex justify-around items-center lg:bg-right-bottom'>
            <p className='text-white font-space-bold text-3xl text-center md:text-5xl'>Sign up and Scoot off today</p>
            <div className='mt-10 flex justify-center align-center gap-3 font-headings'>
                <img className='cursor-pointer' src={appStore} alt="appstore" loading="lazy"/>
                <img className='cursor-pointer' src={googlePlay} alt="googleplay" loading="lazy"/>
            </div>
    </div>
      <div className='py-20 flex flex-col justify-center items-center bg-[#333A44] md:flex-row md:justify-normal md:px-10 md:py-5 lg:px-20'>
        <NavLink to="/"><img className='brightness-[300] ' src={logo} alt="logo" /></NavLink>
        <div>
            <ul className='flex flex-col gap-3 font-headings mt-10 my-10 md:flex-row md:ml-10'>
            <NavLink to="/about"><li className='text-globalDark text-[15px] p-2 cursor-pointer text-center'>About</li></NavLink>
            <NavLink to="/locations"><li className='text-globalDark text-[15px] p-2 cursor-pointer text-center'>Locations</li></NavLink>
            <NavLink to="/careers"><li className='text-globalDark text-[15px] p-2 cursor-pointer text-center'>Careers</li></NavLink>
            </ul>
        </div>
        <div className='flex gap-5 md:ml-auto'>
            <img className='cursor-pointer hover:brightness-[300]' src={facebookbadge} alt="facebookbadge" />
            <img className='cursor-pointer hover:brightness-[300]' src={twitterbadge} alt="facebookbadge" />
            <img className='cursor-pointer hover:brightness-[300]' src={instagrambadge} alt="facebookbadge" />
        </div>
        </div>
    </>
  );
};
