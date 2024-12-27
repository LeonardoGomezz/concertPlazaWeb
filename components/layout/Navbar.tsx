import React, { useState } from "react"
import { SelectCountry } from "../utilsComponents/SelectCountry"
import { Menu } from "@/data/data"
import { TfiMenu } from "react-icons/tfi"

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
    <nav className="bg-[#14171F] py-4 px-8 sm:px-16 base:px-24 flex justify-between items-center h-[80px]">
      <div className="flex items-center gap-8">
        <a href="/">
          <img src="/images/logo.png" alt="logo" title="Concert Plaza" />
        </a>
        <div className="hidden xl:block">
        <SelectCountry/>
        </div>
      </div>
      <div className="hidden xl:flex items-center gap-10 ">
        <ul className="flex items-center gap-8 font-normal text-base leading-5">
          {
            Menu.map(({id,label,href}) =>(
              <li key={id}><a href={href}>{label}</a></li>
            ))
          }
        </ul>
        <div className="flex items-center gap-6">
          <button className="bg-[#202531] hover:bg-[#1b1f29] rounded-lg py-3 px-4">Registrarse</button>
          <button className="bg-[#9233E9] hover:bg-[#6f27b3] rounded-lg py-3 px-4">Iniciar sesión</button>
        </div>
      </div>
      <button className="xl:hidden" onClick={()=>setShowMenu(!showMenu)}><TfiMenu /></button>
    </nav>
    <div 
    className={`w-full bg-[#14171F] flex flex-col gap-8 items-center justify-center xl:hidden transition-all duration-700 absolute z-40 top-[79px] ${showMenu === true ? 'h-[350px] overflow-hidden py-4 top-10' : 'h-0 overflow-hidden py-0'}`}
    >
         <SelectCountry/>
       <ul className="flex flex-col items-center gap-8 font-normal text-base leading-5">
          {
            Menu.map(({id,label,href}) =>(
              <li key={id}><a href={href}>{label}</a></li>
            ))
          }
        </ul>
        <div className="flex items-center gap-6">
          <button className="bg-[#202531] hover:bg-[#1b1f29] rounded-lg py-3 px-4">Registrarse</button>
          <button className="bg-[#9233E9] hover:bg-[#6f27b3] rounded-lg py-3 px-4">Iniciar sesión</button>
        </div>
    </div>
    </>
  )
}