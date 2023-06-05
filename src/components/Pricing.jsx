import React from 'react';
import{CheckIcon} from '@heroicons/react/24/outline'

const Pricing = () => {
  return (
    <div name="Pricing" className='w-full text-white my-24'>
        <div className='w-full bg-slate-900 h-[800px] absolute mix-blend-overlay'></div>
      <div className='max-w-[1240px] py-12 mx-auto'>
        <div className='text-center py-8 text-slate-300'>
            <h2 className='text-3xl uppercase'>Nos Tarifs</h2>
            <h3 className='text-5xl font-bold text-white py-8'>Options de tarification flexibles pour répondre à vos besoins</h3>
            <p className='text-3xl'>Découvrez nos options de tarification flexibles qui s'adaptent à votre budget et vous offrent la liberté de choisir le plan qui correspond le mieux à vos besoins en matière de design management!</p>
        </div>

        <div className='grid md:grid-cols-2'>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                <div>
                    <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>
                <p className='text-2xl py-8 text-slate-500'>Transparence des couts.</p>
                <div className='text-2xl relative'>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Tarification claire .</p>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Calculateur de tarifs.</p>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Options de facturation flexible.</p>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Réductions pour engagements à long terme.</p>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Support inclus.</p>
                    <button className='w-full py-4 my-4'>Get Started</button>
                </div>
            </div>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Prenium</span>
                <div>
                    <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                </div>
                <p className='text-2xl py-8 text-slate-500'>Plans adaptés à chaque entreprise.</p>
                <div className='text-2xl relative'>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Plan Startup.</p>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Plan Entreprise.</p>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Plan Corporatif.</p>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Plan Évolutif.</p>
                    <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Plan Essai gratuit.</p>
                    <button className='w-full py-4 my-4'>Get Started</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
