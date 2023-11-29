import React from "react"
import Header from './components/Header'
import "./App.css"

function App() {
  return (
    <div className="h-screen">
      <Header />
      <main className="mt-[60px] bg-[#e3e3e3] lg:mt-[100px]">
        {/* Banner */}
        <section className="flex justify-center px-5 pt-10 lg:pt-14">
          <div className="w-full max-w-[1240px]">
            <div className="relative w-full h-[410px] md:h-[440px] lg:h-[650px]">
              <div className="flex justify-center mb-4 sm:justify-start">
                <div className="h-auto">
                  <img src="/2023-f2e.svg" className="w-[20rem] md:w-[25rem] lg:w-[30rem]" />
                </div>
              </div>
              <div className="absolute flex flex-col gap-4 lg:(top-1/2 -translate-y-1/2)">
                <div className="w-[342px] h-[119px] md:(w-[400px] h-[190px]) lg:(w-[700px] h-[300px])">
                  <img src="/slogan-m.svg" className="block md:hidden w-full h-full" />
                  <img src="/slogan.svg" className="hidden md:block w-full h-full" />
                </div>
                <div className="flex">
                  <div className="w-[13px] h-[200px] pt-4">
                    <img src="/arrow.svg" className="w-full h-full" />
                  </div>
                  <div className="pl-5 mt-10 md:(w-[650px] h-[80px]) lg:(w-[1000px] h-[123px])">
                    <img src="/name-en-m.svg" className="block md:hidden w-full h-full" />
                    <img src="/name-en.svg" className="hidden md:block w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-[110px] flex right-8 sm:-translate-y-[185px] md:-translate-y-[255px] lg:(-translate-y-[326px] right-20)">
                <div className="relative z-10 w-[242px] h-[315px] sm:(w-[300px] h-[390px]) md:(w-[380px] h-[480px]) lg:(w-[500px] h-[652px])">
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
              <div className="flex flex-col gap-4 p-8 ml-4 bg-white border-solid border-5 border-[#4527a0] rounded-tl-[8rem] rounded-br-[8rem] drop-shadow-[-15px_20px_#41289a] md:(gap-8 ml-0)">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center whitespace-pre-line line-height-tight mb-2.5 break-keep">
                  護航台灣幸福經濟 從照顧每一隻貓咪開始
                </p>
                <h4 className="text-lg md:text-xl lg:text-2xl">我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的GDP 經濟帶來巨大效益。</h4>
                <h4 className="text-lg md:text-xl lg:text-2xl">因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。</h4>
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
