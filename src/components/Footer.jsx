import React from 'react'
import { getImageUrl } from '@/utils'

export const Footer = () => {
  return (
    <footer className=":uno: h-6.25rem bg-main">
      <div className=":uno: grid grid-cols-1 grid-rows-2 md:(grid-cols-2 grid-rows-1) h-full section-h-p">
        <div className=":uno: max-w-8.75rem my-2 md:(max-w-9.38rem my-7)">
          <img src={getImageUrl('logo-white.png')} className=":uno: full-size" />
        </div>
        <div className=":uno: md:(my-auto ml-auto) text-white leading-5 md:leading-6">
          <p className=":uno: text-0.8rem md:text-3.5 lg:text-base">版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。</p>
          <p className=":uno: text-2.5 md:text-3 lg:text-0.8rem">設計師：UNA，工程師：Jenna</p>
        </div>
      </div>
    </footer>
  )
}
