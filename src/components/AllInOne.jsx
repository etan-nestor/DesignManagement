import React from 'react' 
import {CheckIcon} from '@heroicons/react/24/outline'

const AllInOne = () => {
  return (
    <div name="Platforms" className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Puissance de la technologie pour votre succès</h2>
        <p className='text-2xl text-gray-500 text-center py-8'>Découvrez notre plateforme technologique avancée, conçue pour propulser votre réussite vers de nouveaux sommets.</p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                    <div>
                        <h3 className='font-bold text-lg'> Notifications intelligentes</h3>
                        <p className='text-lg pt-2 pb-4'>Restez informé et gardez une longueur d'avance sur votre succès grâce à nos notifications intelligentes, qui vous permettent de suivre les dernières tendances, les mises à jour cruciales et les opportunités clés dans le domaine du design management.</p>
                    </div>
            </div>
            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                    <div>
                        <h3 className='font-bold text-lg'>Collaboration optimisée</h3>
                        <p className='text-lg pt-2 pb-4'>Optimisez votre potentiel créatif en tirant parti de notre plateforme technologique avancée, qui facilite la collaboration fluide entre les membres de votre équipe, vous permettant ainsi d'atteindre de nouveaux sommets dans votre gestion du design.</p>
                    </div>
            </div>
            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                    <div>
                        <h3 className='font-bold text-lg'>Analyse de données approfondie</h3>
                        <p className='text-lg pt-2 pb-4'>Analyse de données": "Prenez des décisions éclairées et orientées vers le succès en exploitant la puissance de notre technologie d'analyse de données avancée, qui vous fournit des insights précis et pertinents pour optimiser votre gestion du design et maximiser vos résultats.</p>
                    </div>
            </div>
            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                    <div>
                        <h3 className='font-bold text-lg'>Visualisation immersive</h3>
                        <p className='text-lg pt-2 pb-4'>Explorez vos concepts de design de manière immersive grâce à notre technologie de visualisation avancée, offrant une expérience réaliste qui vous permet de visualiser et de partager vos idées avec précision et impact.</p>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AllInOne
