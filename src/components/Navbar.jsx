import React,{useState} from 'react'
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/outline";
import { Link} from 'react-scroll'


const Navbar = () => {

    const [nav,setNav]=useState(false);
    const handleClick=()=>setNav(!nav);
    const handleClickClose=()=>setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
            <h1 className='text-1xl font-bold mr-4 cursor-pointer sm:text-4xl text-blue-700'>Etan.</h1>
            <ul className='hidden mr-4 md:flex'>
                <li className='cursor-pointer'><Link to="Home" smooth={true} offset={50} duration={500}>Home</Link></li>
                <li className='cursor-pointer'><Link to="About" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='cursor-pointer'><Link to="Support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className='cursor-pointer'><Link to="Platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                <li className='cursor-pointer'><Link to="Pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
            </ul>
        </div>
        <div className='hidden md:flex pr-4'>
            <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
            <button className='px-6 py-3'>Sign Up</button>
        </div>
        <div className='md:hidden' onClick={handleClick}>
            { !nav ? <Bars3Icon className="h-6 w-6 text-black cursor-pointer" /> : <XMarkIcon className="h-6 w-6 text-gray-500 cursor-pointer" />}
            
        </div>
      </div>
        <ul className={ !nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClickClose} to="Home" smooth={true} offset={50} duration={500}>Home</Link></li>
            <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClickClose} to="About" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClickClose} to="Support" smooth={true} offset={-50} duration={500}>Support</Link></li>
            <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClickClose} to="Platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
            <li className='cursor-pointer border-b-2 border-zinc-300 w-full'><Link onClick={handleClickClose} to="Pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-6 py-3 mb-4 mr-2'>Sign In</button>
                <button className='px-6 py-3'>Sign Up</button>
            </div>
        </ul>
  </div>
  )
}

export default Navbar
