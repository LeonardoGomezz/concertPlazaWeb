import React from 'react'
import { StatisticCardProps } from './types'

export const StatisticCard = ({title, first_percent, second_percent}: StatisticCardProps) => {
  return (
    <div className='max-w-[400px] bg-[#0D1421] mx-auto p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
      <p className='text-sm font-normal'>{title}</p>
      <div className='mt-4 flex justify-between items-center'>
        <p className='text-2xl font-bolt'>{first_percent}</p>
        <p className='text-sm font-normal text-[#F53F7B]'>{second_percent}</p>
      </div>
      <img className='mt-4' src="/images/vector.png" alt="vector" />
    </div>
  )
}
