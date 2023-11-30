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
    <header className="fixed w-full z-50 top-0 py-2 bg-white lg:(py-4 h-[100px])">
      <div className="flex h-full px-5 mx-auto justify-between items-center max-w-[1240px]">
        <div className="flex items-center w-[150px] md:w-[180px] lg:w-[200px]">
          <img src="/logo.png" alt="logo" className="w-full h-auto" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center md:text-md lg:(text-lg gap-x-10) gap-x-4 font-bold">
            {MENU.map((item) => (
              <li>
                <a href={item.link} className="transition ease-in-out	hover:(border-b-4 border-solid pb-2 border-[#41289a])">
                  {item.name}
                </a>
              </li>
            ))}
            <li className="bg-[#41289a] hover:bg-[#543DA4] rounded-full md:(py-2 px-4) lg:(py-4 px-6) shake-animation">
              <a href="#">
                <button className="flex items-center gap-x-2 text-white md:text-md lg:text-xl font-bold">
                  <img src="/coin.svg" className="w-7 h-7" />
                  小額捐款
                </button>
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <input type="checkbox" id="menu-toggle" class="m-menu-icon-input" />
          <label for="menu-toggle" class="cursor-pointer">
            <img src="menu.svg" class="w-7 h-7" color="#41289a" />
          </label>
          <div className="m-menu absolute bg-[#41289a] w-1/2 h-screen right-0 top-full">
            <ul className="flex flex-col gap-8 text-right p-6 text-xl">
              {MENU.map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="text-white transition ease-in-out hover:(border-b-4 border-solid pb-2 border-white)">
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="flex justify-end">
                <a href="#" className="flex items-center gap-1 text-white transition ease-in-out hover:(border-b-4 border-solid pb-2 border-white)">
                  <img src="/coin.svg" className="w-7 h-7" />
                  小額捐款
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header