import React from "react"

const Events = () => {
  return (
    <section className="flex justify-center px-4 pt-[4rem] lg:px-12 xl:px-16">
      <div className="w-full">
        <p className="text-center font-bold text-[2.5rem] lg:text-[3.8rem] pb-[2rem]">最新活動</p>
        <div className="grid grid-cols-1 grid-rows-3 h-[400px] gap-4 md:(grid-cols-[35%_auto] grid-rows-2) lg:gap-8 mb-4">
          <div className="bg-white rounded md:(grid-row-span-2)">
            <div className="flex relative h-full md:flex-col">
              <div className="min-w-[35%] md:max-h-[120px] lg:max-h-[180px]">
                <img src="events-1.png" className="rounded-l md:rounded-t w-full h-full object-cover" />
              </div>
              <div className="p-3 text-ellipsis overflow-hidden">
                <div className="md:absolute top-0 right-0">
                  <div className="bg-[#52a49a] text-sm flex items-center justify-center text-center text-white w-[80px] mb-1 md:(w-[30px] break-words rounded-tr px-2 font-bold)">
                    <span className="hidden md:block">26 DEC.</span>
                    <span className="block md:hidden">2023.12.26</span>
                  </div>
                </div>
                <p className="mb-1 md:text-xl">參與台北寵物論壇 爭取貓咪友善環境</p>
                <p className="text-xs sm:text-sm md:text-md lg:text-base">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded max-h-[216px]">
            <div className="flex flex-row h-full">
              <div className="min-w-[35%]">
                <img src="events-2.png" className="rounded-l w-full h-full object-cover" />
              </div>
              <div className="p-3 text-ellipsis overflow-hidden">
                <div className="bg-[#52a49a] text-sm flex items-center justify-center text-center text-white w-[80px] mb-1 md:(p-1 rounded)">
                  <span>2023.12.31</span>
                </div>
                <p className="mb-1 md:text-xl">帶著你的貓耳，來和我一起走！</p>
                <p className="text-xs sm:text-sm md:text-md lg:text-base">街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded max-h-[216px]">
            <div className="flex flex-row h-full">
              <div className="min-w-[35%]">
                <img src="events-3.png" className="rounded-l w-full h-full object-cover" />
              </div>
              <div className="p-3 text-ellipsis overflow-hidden">
                <div className="bg-[#52a49a] text-sm flex items-center justify-center text-center text-white w-[80px] mb-1 md:(p-1 rounded)">
                  <span>2023.12.31</span>
                </div>
                <p className="mb-1 md:text-xl">收容所模特兒大比拼！</p>
                <p className="text-xs sm:text-sm md:text-md lg:text-base">活動三消息內容：今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center transition hover:scale-110">
          <button className="border-[#41289a] border-0 border-b-1 border-solid text-[#41289a] tracking-[2px] px-4 py-2 cursor-pointer">
            更多活動
            <img src="/more.svg" className="inline-block w-[13px] ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Events