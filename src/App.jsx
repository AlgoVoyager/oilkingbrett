import { useState } from 'react'

function App() {
  const logo ="https://i.postimg.cc/Rh4zzc2K/logo-12.png"
  const banner= "https://i.postimg.cc/tTMpF1cx/image.png"
  const buyLink = "https://www.base.fun/"
  const telegram = "https://t.me/oilkingbrett"
  const teleIcon="https://i.postimg.cc/t42KL5ZW/image.png"
  const x = "https://x.com/OilKingBrett"
  const xlogo="https://i.postimg.cc/jjkrJXRt/image.png"
  const dex = "https://dexscreener.com/base/0xc9E9249Ec7E771b5801016a73364543472acC719"
  const dexlogo = "https://cdn.worldvectorlogo.com/logos/dextools.svg"
  const oilpump = "https://i.postimg.cc/MZ5XZSSk/image.png"
  const oildrip = "https://i.postimg.cc/9QmQvgSm/image.png"
  return (
    <>
      <main className='min-w-full min-h-screen  main font-serif'>
        <img src={oilpump} className='lg:w-60 w-32 lg:left-10 left-auto lg:right-auto right-1 absolute ' alt="" />
        <div className=" mx-auto w-96 font-extrabold lg:pt-0 pt-12 text-center lg:text-xl text-lg  tracking-widest ">
            <img src={logo} alt='logo' className=" z-[5] w-80 lg:w-auto  mx-auto" />
        </div>
        {/* social links */}
        <div className='links lg:mt-0 mt-5 w-full flex lg:flex-row flex-col items-center justify-around gap-2'>
          <div className='border-4 bg-blue- bg-transparent border-blue- lg:mt-0 mt-5'>
            {/* <a href={buyLink} target="_blank"
              className='bg-yellow-100  px-4 py-3 duration-200 hover:text-red-500 lg:text-3xl text-2xl hover:opacity-90 hover:bg-yellow-200 rounded-sm border-2 border-t-4 border-t-white border-b-white border-b-4 border-red-400 text-center font-bold'>
              Buy
            </a> */}
            
          </div>
          <div className='bg-sky-100 relative  bg-opacity-90 lg:w-1/3 w-[97%] text-justify rounded-t-3xl pt-2 '>
            <div className=''>
              <h1 className='text-center text-3xl font-bold'>Oil King Brett </h1>
              
              <p className='p-3'>
              Oil king brett which is memecoin which will pump your wallet and make you rich.
              In the vast deserts of the Middle East, there once lived a prince named Brett, known far and wide as the "Oil King." His wealth and charm were unmatched until a mischievous twist of fate befell him.

              
              </p>
            </div>
            <div className='w-full oildrip absolute h-2'></div>
          </div>

          <div className='flex lg:flex-col flex-row gap-5 z-30'>
            {/* <a href={dex} target="_blank" rel="noopener noreferrer">
              <img src={dexlogo} alt="dex" />
            </a> */}
            <a href={x} target="_blank" className='border-2 rounded '>
              <img src={xlogo} alt="x" className='bg-orange-300' />
            </a>
            <a href={telegram} target="_blank">
              <img src={teleIcon} alt="telegram" className='bg-orange-300 rounded-full' />
            </a>
          </div>
        </div>
      </main>
      {/* <img src={oildrip} className='w-full h-28 object-cover bg-repeat-x' alt="" /> */}
      <section className=" bg-[https://i.postimg.cc/4y28nZmK/image.png] second h-screen flex flex-col gap-5 items-center justify-center  w-full   relative ">
      <img src={"https://i.postimg.cc/Y2ns39Fq/image.png"} className='w-full  left-0 z-20 lg:-top-8 -top-4 absolute ' alt="" />
       
            {/* <div className='text-red-200 p-2 bg-dot-white bg-blue-700'>0xc9E9249Ec7E771b5801016a73364543472acC719</div> */}
            <div className='bg-sky-100 relative  bg-opacity-90 lg:w-1/3 w-[97%] text-justify rounded-t-3xl pt-2 '>
            <div className=''>
              <h1 className='text-center text-3xl font-bold'>Oil King Brett </h1>
              
              <p className='p-3'>
              One fateful night, Brett stumbled upon an ancient lamp and, in true Shrek-like fashion, found himself transformed into a Pepe. Now, as Oil King Brett, he embarks on a comical journey to reclaim his royal legacy, one meme at a time.
              </p>
            </div>
            <div className='w-full oildrip absolute h-2'></div>
          </div>
            <a href={buyLink} target="_blank"
              className='bg-indigo-500 hidden text-red-200 z-50 bg-grid-small-red-500 mx-auto mt-5 w-fit block px-4 py-3 duration-200 hover:text-red-500 hover:scale-150 scale-125 lg:text-2xl hover:opacity-90 hover:bg-yellow-100 rounded text-center font-bold'>
              Buy Now <img src="https://www.base.fun/images/logo_powered_by_dx.svg" className='w-28' alt="" />
            </a>
      <img src={logo} className='lg:w-72 w-44 lg:right-24 right-1 bottom-0 absolute ' alt="" />
      </section>
    </>
  )
}

export default App
