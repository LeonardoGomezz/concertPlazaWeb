import { FastAccess, Support } from "@/data/data"
import FacebookIcon from "@/public/icons/facebookIcon"
import InstagramIcon from "@/public/icons/instagramIcon"
import YoutubeIcon from "@/public/icons/youtubeIcon"
import React from "react"

export const Footer = () => {
  return (
    <footer className="bg-[#0D1421] py-10 px-4 sm:px-16 base:px-24">
      <div className="grid grid-cols-1 justify-items-center xl:grid-cols-3 gap-[100px] base:gap-[140px]">
        <div className="sm:w-[272px]">
          <img src="/images/logo.png" alt="" />
          <p className="max-w-[272px] font-normal text-sm mt-[19px]">
            Conectando fans, artistas y empresarios en el mundo de la música en
            vivo.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-[100px] sm:w-[370px]">
          <div>
            <h3 className="font-bold text-sm">Accesos rápidos</h3>
            <ul className="font-normal text-[12.8px] mt-4 flex flex-col gap-4">
              {FastAccess.map(({ id, label, href }) => (
                <li key={id}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm">Soporte</h3>
            <ul className="font-normal text-[12.8px] mt-4 flex flex-col gap-4">
              {Support.map(({ id, label, href }) => (
                <li key={id}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-sm">
            ¡Tu entrada al mundo de los mejores conciertos!
          </h3>
          <p className="max-w-[327px] font-normal text-[12.8px] my-6">
            Suscríbete a nuestro boletín y sé el primero en enterarte de los
            próximos conciertos, ofertas exclusivas y novedades del mundo de la
            música.
          </p>
          <div>
            <form className="flex items-center gap-1">
              <input
                type="text"
                placeholder="Escriba su E-mail"
                className="bg-[#323A4B] rounded-lg px-2 py-3"
              />
              <button className="px-4 py-3 rounded-lg bg-[#9233E9] hover:bg-[#6f27b3] text-sm font-normal">
                ¡Suscribirme!
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10 py-7 border-t border-gray-200 w-full">
        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
          <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <YoutubeIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
          </div>
          <span className="text-sm font-normal mt-2 lg:mt-0">
            © 2024 Concert Plaza. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}
