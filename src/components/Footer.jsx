import React from 'react';
import{
    FaFacebook,
    FaGithub,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-6 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div>
            <h6 className='font-bold uppercase pt-2'>Solutions</h6>
            <ul>
                <li className='py-1'>Marketting</li>
                <li className='py-1'>Analyticas</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Support</h6>
            <ul>
                <li className='py-1'>Marketting</li>
                <li className='py-1'>Analyticas</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
                <li className='py-1'>Marketting</li>
                <li className='py-1'>Analyticas</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Legal</h6>
            <ul>
                <li className='py-1'>Marketting</li>
                <li className='py-1'>Analyticas</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to your new letter</p>
            <p className='py-4'>The latest news,articles,and ressources sent to your inbox weekly</p>
            <form action="" className='flex flex-col sm:flex-row'>
                <input className='w-full p-2 mr-4 mb-4 rounded-md' type="email" placeholder='Enter Email' />
                <button className='p-2 mb-4'>Subscribe</button>
            </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] m-auto justify-between sm:flex-row text-center text-gray-500 px-2 py-4 items-center'>
        <p className='py-4'>2023 workflow, LLC, all right reserved</p>
        <div className='flex justify-between items-center sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
        </div>
      </div>
    </div>
  )
}

export default Footer
