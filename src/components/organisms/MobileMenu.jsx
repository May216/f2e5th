import React from 'react'
import { getImageUrl } from '@/utils'
import { MENU } from '@/constants'

export const MobileMenu = () => {
  return (
    <div className=":uno: md:hidden">
      <input type="checkbox" id="menu-toggle" class="m-menu-icon-input" />
      <label for="menu-toggle" class="cursor-pointer mr-2">
        <img src={getImageUrl('menu.svg')} class="w-7 h-7" />
      </label>
      <div className=":uno: m-menu absolute bg-main w-1/2 h-screen right-0 top-full">
        <ul className=":uno: flex flex-col gap-8 text-right p-6 text-xl">
          {MENU.map(item => (
            <li key={item.name}>
              <a href={item.link} className=":uno: m-menu-border">
                {item.name}
              </a>
            </li>
          ))}
          <li className=":uno: flex justify-end">
            <a href="#donate" className=":uno: flex items-center gap-1 m-menu-border">
              <img src={getImageUrl('coin.svg')} className=":uno: w-7 h-7" />
              小額捐款
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
