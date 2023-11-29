import React from "react"

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

const Header = () => {
  return (
    <header className="fixed w-full flex-center z-50 top-0 bg-white py-2 md:py-4 h-[60px] md:h-[100px]">
      <div className="flex px-5 mx-auto justify-between items-center max-w-[1240px]">
        <div className="flex items-center w-[150px] md:w-[200px]">
          <img src="/logo.png" alt="logo" className="w-full h-auto" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center text-lg gap-x-4 lg:gap-x-10 font-bold">
            {MENU.map((item) => (
              <li>
                <a href={item.link} className="transition ease-in-out	hover:border-b-4 hover:pb-2 hover:border-[#41289a]">
                  {item.name}
                </a>
              </li>
            ))}
            <li className="bg-[#41289a] hover:bg-[#543DA4] rounded-full py-4 px-6 shake-animation">
              <a href="#">
                <button className="flex items-center gap-x-2 text-white text-xl font-bold">
                  <img src="/coin.svg" className="w-7 h-7" />
                  小額捐款
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header