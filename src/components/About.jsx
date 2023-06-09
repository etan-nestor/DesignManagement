import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold'>Créativité dirigée vers un succès harmonieux.</h2>
            <p className='text-3xl text-gray-500 py-6'>La créativité est le carburant qui donne vie aux idées, ouvrant les portes de l'innovation et transformant l'ordinaire en extraordinaire</p>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>100%</p>
                <p className='text-gray-400 mt-2'>Innovation</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                <p className='text-gray-400 mt-2'>Collaboration</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'>100K</p>
                <p className='text-gray-400 mt-2'>Strategie</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
