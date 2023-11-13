import React from "react"
import Header from './components/Header'
import "./App.css"

const MENU = [
  {
    name: '候選人主張',
    link: '#',
  }, {
    name: '最新活動',
    link: '#',
  }, {
    name: '政策議題',
    link: '#',
  }, {
    name: '民眾服務信箱',
    link: '#',
  }
]

function App() {
  return (
    <div className="App">
      <nav className="menu">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center w-[150px] h-[38px] md:w-[235px] md:h-[50px]">
            <img src="/logo.png" alt="logo" className="w-40" />
          </div>
          <ul className="flex items-center text-lg gap-[3vw] font-bold">
            {MENU.map((item) => (
              <li>
                <a href={item.link} className="transition ease-in-out	hover:border-b-4 hover:pb-3 hover:border-[#41289a]">
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#">
                <button className="flex flex-row items-center bg-[#41289a] text-white text-xl font-bold rounded-full py-4 px-6 shake-animation">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1"></path><path d="M12 7v10"></path></svg>
                  小額捐款
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="bg-[#e3e3e3] h-screen">

      </section>
      {/* 最新活動 */}
      <section>

      </section>
      {/* 政策議題 */}
      <section>

      </section>
      {/* 小額捐款 */}
      <section>

      </section>
      {/* 民眾服務信箱 */}
      <section>

      </section>
      <footer>

      </footer>
    </div>
  )
}

export default App
