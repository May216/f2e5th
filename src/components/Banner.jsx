import React from 'react'
import { getImageUrl } from '@/utils'

export const Banner = () => {
  return (
    <>
      <section id="banner" className=":uno: flex justify-center section-h-p pt-5 md:pt-20 lg:pt-14">
        <div className=":uno: w-full">
          <div className=":uno: relative w-full h-25.6rem md:h-27.5rem lg:h-40.6rem">
            <div data-aos="fade-down" className=":uno: flex justify-center mb-4 sm:justify-start">
              <div className=":uno: h-auto">
                <img src={getImageUrl('2023-f2e.svg')} className=":uno: w-20rem md:w-25rem lg:w-30rem" />
              </div>
            </div>
            <div className=":uno: absolute flex flex-col gap-4 lg:(top-1/2 -translate-y-1/2)">
              <div data-aos="fade-down" className=":uno: w-21.3rem h-7.4rem md:(w-25rem h-11.8rem) lg:(w-43.7rem h-18.7rem)">
                <img src={getImageUrl('slogan-m.svg')} className=":uno: block md:hidden full-size" />
                <img src={getImageUrl('slogan.svg')} className=":uno: hidden md:block full-size" />
              </div>
              <div className=":uno: flex">
                <div data-aos="fade-down" className=":uno: w-1rem h-48 pt-4">
                  <img src={getImageUrl('arrow.svg')} className=":uno: w-3" />
                  <img src={getImageUrl('slogan-en.svg')} className=":uno: pt-4 w-5" />
                </div>
                <div data-aos="fade-right" className=":uno: pl-5 mt-10 md:(w-40.6rem h-20) lg:(w-62.5rem h-32)">
                  <img src={getImageUrl('name-en-m.svg')} className=":uno: block md:hidden full-size" />
                  <img src={getImageUrl('name-en.svg')} className=":uno: hidden md:block full-size" />
                </div>
              </div>
            </div>
            <div className=":uno: absolute top-1/2 -translate-y-6.875rem flex right-8 sm:-translate-y-11.563rem md:-translate-y-64 lg:(-translate-y-20.375rem right-20)">
              <div
                data-aos="zoom-in"
                className=":uno: relative z-10 w-15.13rem h-19.69rem sm:(w-18.75rem h-24.38rem) md:(w-23.8rem h-30rem) lg:(w-31.25rem h-40.75rem)"
              >
                <img src={getImageUrl('candidate.webp')} className=":uno: full-size" />
              </div>
              <div
                data-aos="fade-down"
                className=":uno: mt-4 w-7.5rem h-25rem right-[-2rem] lg:(w-8.125rem h-26.875rem mt-2 right-[-4rem]) absolute hidden md:flex"
              >
                <img src={getImageUrl('name.svg')} className=":uno: full-size" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="zoom-in" className=":uno: flex justify-center mx-10 lg:mx-20">
        <div className=":uno: w-full">
          <div className=":uno: flex gap-4 md:gap-16 ml-10">
            <div className=":uno: flex flex-col gap-5 p-8 bg-white border-solid border-5 border-main rounded-tl-8rem rounded-br-8rem drop-shadow-[-15px_20px_#41289a] md:(gap-8 ml-0)">
              <p className=":uno: text-2xl md:text-3xl lg:text-4xl font-bold text-center whitespace-pre-line line-height-normal break-keep">
                護航台灣幸福經濟 從照顧每一隻貓咪開始
              </p>
              <h4 className=":uno: text-lg md:text-xl lg:text-2xl">
                我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的GDP
                經濟帶來巨大效益。
              </h4>
              <h4 className=":uno: text-lg md:text-xl lg:text-2xl">
                因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
