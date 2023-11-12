import React from "react"
import Header from './components/Header'
import "./App.css"

function App() {
  return (
    <div className="w-full h-full select-none	bg-gradient-to-r from-[#5D81B1] via-[#5D81B182] to-[#5D81B1]">
      <Header />
      <div className="flex flex-row select-none px-[6rem] h-screen">
        <div className="bg-[#EFF2F7] rounded-full w-80 h-80 opacity-10 absolute translate-x-[25rem] translate-y-[20rem]" />
        <div className="flex flex-col flex-1 justify-center text-white title">
          <p className="text-8xl tracking-[4rem]">喵的未來</p>
          <div className="flex flex-row items-center my-6 w-fit border-y py-1">
            <span className="text-3xl tracking-[0.4rem]">Meow's future</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 mr-3" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <ellipse cx="2.70455" cy="9.07318" rx="2.45455" ry="3.21951" fill="#CDD8E7" />
              <ellipse cx="8.43186" cy="3.80488" rx="2.72727" ry="3.80488" fill="#CDD8E7" />
              <ellipse cx="21.7954" cy="9.07318" rx="2.45455" ry="3.21951" fill="#CDD8E7" />
              <ellipse cx="16.0682" cy="3.80488" rx="2.72727" ry="3.80488" fill="#CDD8E7" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4517 10.3574C11.7118 10.3874 9.90279 10.8766 8.01174 12.6593C7.19116 13.4328 6.41797 14.0145 5.72986 14.5321C4.36894 15.5559 3.34077 16.3293 2.9368 17.842C2.37292 19.9534 2.74884 21.681 3.8766 22.8327C5.00437 23.9844 7.25989 24.3683 9.32746 23.6005C10.9324 23.0045 12.0772 22.8422 12.4872 22.8331C12.8972 22.8422 14.0421 23.0045 15.647 23.6005C17.7146 24.3683 19.9701 23.9844 21.0979 22.8327C22.2256 21.681 22.6015 19.9534 22.0377 17.842C21.6337 16.3293 20.6055 15.5559 19.2446 14.5321C18.5565 14.0145 17.7833 13.4328 16.9627 12.6593C15.0717 10.8766 13.2627 10.3874 12.5228 10.3574V10.3559C12.5113 10.3559 12.4994 10.356 12.4872 10.3563C12.475 10.356 12.4632 10.3559 12.4517 10.3559V10.3574Z" fill="#CDD8E7" />
            </svg>
            <span className="text-3xl tracking-[0.4rem]">People's hope</span>
          </div>
          <div className="boder-t-2" />
          <p className="text-8xl tracking-[4rem]">人的希望</p>
        </div>
        <div className="flex flex-col flex-1 z-10">
          <div className="flex flex-row flex-1 pr-[2.8rem]">
            <img src="man.png" className="w-auto h-auto" draggable="false" />
            <div className="flex flex-col items-center pt-[5rem]">
              <span className="text-white text-8xl pb-[2rem]">1</span>
              <span className="name tracking-[2rem]">喵立翰</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-64 justify-center bg-[#212d3e] text-white py-7 px-28 text-center gap-6">
        <p className="text-4xl">「讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。」</p>
        <p className="text-xl">我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。</p>
      </div>
    </div>
  )
}

export default App
