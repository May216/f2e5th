import React from "react"
import Header from './components/Header'
import useSize from "./hooks/useSize"
import "./App.css"

function App() {
  const [width, height] = useSize()

  return (
    <div className="h-screen bg-[#e3e3e3]">
      <Header />
      <main className="mt-[60px] md:mt-[100px]">
        <section className="flex justify-center pt-5 px-5 sm:pt-5 md:pt-11">
          <div className="w-full max-w-[1240px]">
            <div className="relative w-full h-[410px] md:h-[650px]">
              <div className="flex justify-center sm:justify-start mb-4">
                <div className="w-[300px] h-auto sm:w-[440px] sm:h-[30px]">
                  <img src="/2023-f2e.svg" className="" />
                </div>
              </div>
              <div className="absolute md:top-1/2 md:-translate-y-1/2 flex flex-col gap-4">
                <div className="w-[342px] h-[119px] md:w-[700px] md:h-[300px]">
                  <img src={width < 768 ? "/slogan-m.svg" : "/slogan.svg"} />
                </div>
                <div className="flex">
                  <div className="w-[13px] h-[200px] pt-4">
                    <img src="/arrow.svg" className="w-full h-full" />
                  </div>
                  <div className="w-[234px] h-[125px] md:w-[1000px] md:h-[123px] pl-5 mt-6">
                    <img src={width < 768 ? "/name-en-m.svg" : "/name-en.svg"} className="w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-[110px] sm:-translate-y-[185px] md:-translate-y-[326px] lg:-translate-y-1/2 flex right-8 md:right-20">
                <div className="relative z-10 w-[242px] h-[315px] sm:w-[300px] sm:h-[390px] md:w-[500px] md:h-[652px]">
                  <img src="/candidate.webp" className="w-full h-full" />
                </div>
                <div className="w-[130px] h-[430px] absolute right-0 hidden lg:flex">
                  <img src="/name.svg" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center px-5">
          <div className="w-full max-w-[1240px]">
            <div className="flex gap-4 md:gap-[64px]">
              <img src="/slogan-en.svg" className="w-[19px] h-auto" />
              <div className="w-auto p-4 bg-white border-4 border-[#4527a0] rounded-tl-[80px] rounded-br-[80px] shadow-[-5px_5px_0_0_rgba(69,39,160,1)] md:shadow-[-15px_20px_0_0_rgba(69,39,160,1)]">
                <p className="text-xl md:text-[44px] font-bold text-center whitespace-pre-line mb-2.5">護航台灣幸福經濟 從照顧每一隻貓咪開始</p>
                <p className="text-[15px] md:heading-4 whitespace-pre-line">
                  {`我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的GDP 經濟帶來巨大效益。

                  因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
                  `}
                </p>
              </div>
            </div>
          </div>
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
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
