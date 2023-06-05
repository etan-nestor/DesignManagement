import React from 'react'
import {
    PhoneIcon,
    LifebuoyIcon,
    CpuChipIcon,
    ArrowLongRightIcon
} from '@heroicons/react/24/outline'
import supportImg from '../assets/4.jpg'

const Support = () => {
  return (
    <div name="Support" className='w-full  wt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="supportImg" />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
         <div className='px-4 py-12'>
            <h2 className='pt-8 text-slate-300 uppercase text-center text-3xl'>Support</h2>
            <h3 className='text-5xl font-bold py-6 text-center'>Amélioration de l'expérience utilisateur</h3>
            <p className='py-4 text-3xl text-slate-300'>Nous sommes là pour vous offrir un support exceptionnel, afin de rendre votre expérience avec nous toujours plus agréable et sans soucis.</p>
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-4 sm:pt-20 text-black'>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <PhoneIcon className='w-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]' />
                    <h3 className='text-2xl font-bold my-6'>Résolution rapide des problèmes</h3>
                    <p className='text-gray-600 text-xl'>Nous sommes là pour résoudre vos problèmes avec rapidité et efficacité.Obtenez une assistance de qualité supérieure pour une résolution rapide de vos problèmes.</p>
                </div>
                <div className='bg-slate-100 pl-8 my-4'>
                    <p className='flex items-center text-indigo-600'>Contactez-nous <ArrowLongRightIcon className='w-5 ml-2' /></p>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <LifebuoyIcon className='w-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]' />
                    <h3 className='text-2xl font-bold my-6'>Assistance personnalisée</h3>
                    <p className='text-gray-600 text-xl'>Nous offrons une assistance personnalisée pour répondre à vos besoins spécifiques.Bénéficiez d'une assistance personnalisée qui s'adapte à vos exigences et à votre rythme.</p>
                </div>
                <div className='bg-slate-100 pl-8 my-4'>
                    <p className='flex items-center text-indigo-600'>Contactez-nous <ArrowLongRightIcon className='w-5 ml-2' /></p>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <CpuChipIcon className='w-16 p-4 bg-indigo-600 rounded-lg text-white mt-[-4rem]' />
                    <h3 className='text-2xl font-bold my-6'>Ressources utiles et guides</h3>
                    <p className='text-gray-600 text-xl'>Accédez à notre collection complète de ressources et guides pour optimiser votre expérience.Explorez notre bibliothèque de ressources pour obtenir des conseils et des astuces précieuses</p>
                </div>
                <div className='bg-slate-100 pl-8 my-4'>
                    <p className='flex items-center text-indigo-600'>Contactez-nous <ArrowLongRightIcon className='w-5 ml-2' /></p>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Support
