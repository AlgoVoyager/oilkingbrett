import React from 'react'
import Oil King BrettLogo from '../assets/Oil King Brettlogo.png'
const Navbar = ({buyLink,telegram}) => {
    const x = "https://x.com/Oil King Brettonbase"
    const dexscreen = "https://dexscreener.com/"
    const dextools = "https://www.dextools.io/app/en/pairs"
  return (
    <nav className='flex z-10 rounded-b-3xl lg:bg-transparent bg-opacity-30 bg-cyan-300 lg:backdrop-blur-md backdrop-blur items-center fixed w-full justify-between  lg:px-28 px-3 '>
        <a href='/' className="logo">
            <img src={Oil King BrettLogo} alt="" />
        </a>
        <div className="links flex gap-6 items-center justify-between">
            {/* <a href={dexscreen} target='_blank' >
                <img src="https://cdn.prod.website-files.com/6651d0bfc2673e13915c6607/6653a89f5ac6445c26b00baa_dexscreener.webp" alt="DexScreen" />
            </a>
            <a href={dextools} target='_blank' >
                <img src="https://cdn.prod.website-files.com/6651d0bfc2673e13915c6607/6653a89f50c3065d79afd56f_dextools.webp" alt="DexTools" />
            </a> */}
            <a href={buyLink} target='_blank' >
                <img src="https://www.base.fun/images/small_logo.svg"  alt="base.fun" />
            </a>
            <a href={x} target='_blank' >
                <img src="https://cdn.prod.website-files.com/6651d0bfc2673e13915c6607/6653a89f7a94ab2f0804ced2_twitter.webp" alt="X" />
            </a>
            <a href={telegram} target='_blank' >
                <img src="https://cdn.prod.website-files.com/6651d0bfc2673e13915c6607/6653a89f1c87dfce9971e5bb_telegram.webp" alt="Telegram" />
            </a>
            <a target='_blank' href={buyLink}
             className='bg-blue-400 lg:p-3 p-1 rounded-2xl border border-black text-white lg:font-extrabold font-semibold lg:text-2xl text-lg hover:bg-blue-500 hover:shadow-xl'>
                BUY
            </a>
        </div>
    </nav>
  )
}

export default Navbar