import React from 'react'
import { getImageUrl } from '@/utils'
import '@/styles/donate.css'

export const Donate = () => {
  return (
    <section id="donate" className=":uno: donate-container">
      <div className=":uno: absolute top-1/2 left-3.125rem -translate-y-25vh bg-white rounded-12 p-2rem w-60% h-3/5">
        <div data-aos="flip-left" className=":uno: flex flex-col h-full justify-center items-center">
          <p className=":uno: text-10 md:text-4em font-bold mb-4">小額捐款</p>
          <p className=":uno: text-1.2rem md:text-1.38rem mb-4">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
          <p className=":uno: text-main text-7 md:text-8 font-bold">累積總金額</p>
          <p className=":uno: text-main text-8 md:text-3.38rem font-bold">NT$ 987,655,873</p>
          <button className=":uno: purple-button flex items-center gap-x-2 mt-4 md:text-6 lg:text-7 scale-button">
            <img src={getImageUrl('coin.svg')} className=":uno: w-7 h-7" />
            前往捐款
          </button>
        </div>
      </div>
    </section>
  )
}
