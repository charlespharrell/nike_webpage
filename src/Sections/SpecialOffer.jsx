import React from 'react'
import { offer } from '../assets/images'
import Button from '../Component/Button'
import { arrowRight } from '../assets/icons'

function SpecialOffer() {
  return (
    
      <section className='flex justify-wrap items-center max-xl:flex-col-reverse
      gap-10 max-container'>
        <div className='flex-1'>
          <img src={offer} width={773} height={687} alt=""
          className='object-obtain w-full'
          />
        </div>

        <div className='flex flex-1 flex-col'>     
            <h2 className=' font-palanquin  text-4xl capitalize
            font-bold lg:max-w-lg'>
              <span className='text-coral-red'> Special </span>
              offer
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'>
              Embark on a shopping journey that redefines your experinece with unbeatables deals. From 
              Premier selection to incredible savings. We offer unparralled value that set us apart
            </p>
            <p className='mt-6 lg:max-w-lg info-text'>
              Navigate a realm of possibilities designed to fulfil your unique desires,
               surpassing the loftiest expectations. 
              Your journey with us is nothing short of exceptional
            </p>
            <div className='mt-11 flex flex-wrap gap-4'>
              <Button label='View details'
              />
               <Button label='Learn more'
              backgroundColor='bg-white'
              borderColor='border-slate-gray'
              textColor='text-slate-gray'/>
            </div>

      </div>

      </section>
  )
}

export default SpecialOffer
