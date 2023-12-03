import React from 'react'
import { MENU } from '@/constants'
import { getImageUrl } from '@/utils'

export const Menu = () => {
  return (
    <nav className=":uno: hidden md:block">
      <ul className=":uno: flex items-center lg:(text-lg gap-x-10) gap-x-4 font-bold">
        {MENU.map(item => (
          <li>
            <a href={item.link} className=":uno: menu-border">
              {item.name}
            </a>
          </li>
        ))}
        <a href="#donate" className=":uno: purple-button flex items-center gap-x-2 lg:text-xl shake-animation">
          <img src={getImageUrl('coin.svg')} className=":uno: w-7 h-7" />
          小額捐款
        </a>
      </ul>
    </nav>
  )
}
