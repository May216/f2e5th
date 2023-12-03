import React from 'react'

export const ContactForm = () => {
  return (
    <form action="" className=":uno: flex flex-col gap-1rem">
      <input type="text" placeholder="您的姓名" className=":uno: contact-input" />
      <input type="text" placeholder="您的 Email" className=":uno: contact-input" />
      <input type="text" placeholder="您的手機號碼" className=":uno: contact-input" />
      <textarea cols="30" rows="10" placeholder="您的建言" className=":uno: contact-input" />
      <button className=":uno: purple-button text-1.375rem m-x-auto scale-button">送出意見</button>
    </form>
  )
}
