import React from 'react'
import { PolicyCard } from './atoms'
import { POLICY_DATA } from '@/constants/policy'
import '@/styles/policy.css'

export const Policy = () => {
  return (
    <section id="policy" className=":uno: mt-4rem pb-2rem md:pb-4rem bg-main">
      <div data-aos="fade-up" className=":uno: w-full pt-2rem">
        <p className=":uno: text-white section-title">政策議題</p>
        <div className=":uno: grid grid-rows-3 section-h-p md:(grid-cols-3 grid-rows-1) gap-4  lg:gap-8">
          {POLICY_DATA.map((policy, index) => (
            <PolicyCard key={policy.tagTitle} {...policy} className={index === 1 ? 'md:translate-y-5' : undefined} />
          ))}
        </div>
      </div>
    </section>
  )
}
