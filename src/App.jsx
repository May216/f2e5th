import React from 'react'
import { Header, Banner, Events, Policy, Donate, Contact, Footer } from '@/components'
import '@/styles/App.css'

function App() {
  return (
    <div className=":uno: h-screen">
      <Header />
      <main className=":uno: mt-3.75rem lg:mt-5.6rem xl:mt-6.25rem">
        <Banner />
        <Events />
        <Policy />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
