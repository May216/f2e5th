import React from 'react'
import { Menu, MobileMenu } from './organisms'
import { getImageUrl } from '@/utils'
import '@/styles/header.css'

export const Header = () => {
  return (
    <header className=":uno: fixed w-full z-50 top-0 py-2 bg-white">
      <div className=":uno: flex h-full mx-auto justify-between items-center section-h-p">
        <div className=":uno: flex items-center w-36 md:w-44 lg:w-52">
          <img src={getImageUrl('logo.png')} alt="logo" className=":uno: w-full h-auto" />
        </div>
        <Menu />
        <MobileMenu />
      </div>
    </header>
  )
}
