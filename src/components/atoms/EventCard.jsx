import React from 'react'
import { getFormattedDate, getImageUrl } from '@/utils'

export const EventCard = ({ index, image, date, title, content }) => {
  const containerClass = index === 0 ? ':uno: bg-white rounded md:grid-row-span-2' : ':uno: bg-white rounded max-h-13.5rem'
  const firstItemClass = index === 0 ? ':uno: flex h-full relative md:flex-col' : ':uno: flex h-full'
  const imageClass = index === 0 ? ':uno: min-w-35% md:max-h-7.5rem lg:max-h-11.25rem' : ':uno: min-w-35%'
  return (
    <div className={containerClass}>
      <div className={firstItemClass}>
        <div className={imageClass}>
          <img src={getImageUrl(image)} className=":uno: event-img" />
        </div>
        <div className=":uno: date-tag-conatiner">
          {index === 0 ? (
            <div className=":uno: md:absolute top-0 right-0">
              <div className=":uno: date-tag md:(w-1.875rem break-words rounded-tr px-2 font-bold)">
                <span className=":uno: hidden md:block">{getFormattedDate(date)}</span>
                <span className=":uno: block md:hidden">{date}</span>
              </div>
            </div>
          ) : (
            <div className=":uno: date-tag md:p-1">
              <span>{date}</span>
            </div>
          )}
          <p className=":uno: event-title">{title}</p>
          <p className=":uno: event-content">{content}</p>
        </div>
      </div>
    </div>
  )
}
