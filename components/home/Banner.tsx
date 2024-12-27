import React from 'react'

export const Banner = () => {
  return (
    <div className='relative flex justify-center sm:justify-start items-center'>
      <img className='w-full h-[480px] object-cover' src="/images/banner.jpeg" alt="" />
      <div className='absolute sm:right-[90px] lg:right-[160px] px-4'>
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl text-end'>¿Eres artista?</h2>
        <h2 
        style={{
          background: 'linear-gradient(89.4deg, #62E6D7 -5.77%, #F45FED 39.66%, #FBA966 97.47%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        className='font-bold text-2xl sm:text-3xl md:text-4xl text-end'>¡Sé parte de nuestro catálogo!</h2>
        <div className='flex justify-center sm:justify-end mt-24'>
        <button className='text-[#18181B] font-normal text-base bg-[#E4E4E7] hover:bg-[#b9b9bb] rounded-lg py-3 px-4 '>¡Unirme ahora!</button>
        </div>
      </div>
    </div>
  )
}
