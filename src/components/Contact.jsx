import React from 'react'
import { ContactForm } from './molecules'
import { getImageUrl } from '@/utils'
import '@/styles/contact.css'

export const Contact = () => {
  return (
    <section id="contact" className=":uno: relative flex justify-center py-2rem md:py-4rem section-h-p">
      <div data-aos="fade-up" className=":uno: w-full grid grid-cols-1 grid-rows-30%_auto mb-30 md:(grid-cols-2 grid-rows-1) lg:mb-20 gap-8">
        <div className=":uno: text-center">
          <p className=":uno: text-center font-bold text-10 pb-4 md:(text-3.38rem mb-.6rem) lg:(text-3.75rem mb-1rem)">民眾服務信箱</p>
          <p className=":uno: text-5 mb-2 md:(text-1.3rem mb-2) lg:(text-6 mb-3)">您的聲音，我們的行動！</p>
          <p className=":uno: text-5 md:text-1.3rem">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
          </p>
        </div>
        <ContactForm />
      </div>
      <div className=":uno: absolute left-0 bottom-0 translate-y-34%">
        <div className=":uno: mx-auto w-3/4 h-3/4 md:full-size">
          <img src={getImageUrl('cat.png')} alt="cat" className=":uno: full-size" />
        </div>
      </div>
    </section>
  )
}
