import React from 'react'
import { EventCard } from './atoms'
import { EVENT_DATA } from '@/constants/event'
import { getImageUrl } from '@/utils'
import '@/styles/event.css'

export const Events = () => {
  return (
    <section id="events" data-aos="fade-up" className=":uno: flex justify-center pt-4rem section-h-p">
      <div className=":uno: w-full">
        <p className=":uno: section-title">最新活動</p>
        <div className=":uno: grid grid-cols-1 grid-rows-3 h-25rem gap-4 md:(grid-cols-[35%_auto] grid-rows-2) lg:gap-8 mb-4">
          {EVENT_DATA.map((event, index) => (
            <EventCard key={event.title} index={index} {...event} />
          ))}
        </div>
        <div className=":uno: text-center transition duration-300 hover:scale-110">
          <button className=":uno: border-main border-0 border-b-1 border-solid text-main tracking-2px px-4 py-2 cursor-pointer">
            更多活動
            <img src={getImageUrl('more.svg')} className=":uno: inline-block w-0.8rem ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
