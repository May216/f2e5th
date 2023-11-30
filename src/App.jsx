import React from "react"
import Header from './components/Header'
import Banner from "./components/Banner"
import Events from "./components/Events"
import Policy from "./components/Policy"
import "./App.css"

function App() {
  return (
    <div className="h-screen">
      <Header />
      <main className="mt-[60px] lg:mt-[90px] xl:mt-[100px]">
        <Banner />
        <Events />
        <Policy />
        {/* 小額捐款 */}
        <section>

        </section>
        {/* 民眾服務信箱 */}
        <section>

        </section>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
