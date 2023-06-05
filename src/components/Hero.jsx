import React from 'react' ;
import bgImg from '../assets/1.png';
import {
GlobeAltIcon,
PhotoIcon,
PaintBrushIcon,
SparklesIcon,
} from '@heroicons/react/24/solid'

const Hero = () => {
  return (
    <div name="Home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full  px-2 py-6'>
            <p className='text-2xl'>Univers du Design & des Images </p>
            <h1 className='py-3 text-4xl md:text-7xl font-bold'>Design Management</h1>
            <p className='text-2xl'>This our Tech Design.</p>
            <button className='py-3 px-6 sm:w-[60%]'>Get Started</button>
        </div>
        <div>
            <img className='w-full cursor-pointer' src={bgImg} alt="bgImage" />
        </div>
        <div className='absolute flex flex-col py-6 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
            <p className='font-bold text-blue-700 text-2xl pb-8 cursor-pointer'>Design Services</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500 cursor-pointer'><GlobeAltIcon  className="h-6 w-6 mr-2 text-indigo-500 " /> Web Design</p>
                <p className='flex px-4 py-2 text-slate-500 cursor-pointer'><SparklesIcon className="h-6 w-6 text-indigo-500 mr-2" /> Dashboard Design</p>
                <p className='flex px-4 py-2 text-slate-500 cursor-pointer'><PaintBrushIcon className="h-6 w-6 mr-2 text-indigo-500" /> Graphic Design</p>
                <p className='flex px-4 py-2 text-slate-500 cursor-pointer'><PhotoIcon className="h-6 w-6 text-indigo-500 mr-2" /> Images</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
