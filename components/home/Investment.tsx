import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { StatisticCard } from "../utilsComponents/StatisticCard";
import { Statistics } from "@/data/data";

export const Investment = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/investmentBackground.png')",
        backgroundSize: "cover",
      }}
      className="w-full h-full"
    >
      <div className="bg-[#0D0F14] text-balance bg-opacity-80 px-4 sm:px-0 sm:p-16 xl:p-24 flex flex-col xl:flex-row items-center justify-center gap-10 sm:gap-20 xl:gap-32">
        <div className="max-w-[604px] py-[39px]">
          <h2 className="font-bold text-2xl sm:text-3xl xl:text-4xl">
            Tu mejor oportunidad para invertir en el mundo de la música.
          </h2>
          <p className="font-semibold text-base sm:text-lg xl:text-xl mt-10">
            Conoce la intensión de compra, la ciudad perfecta y todos los datos
            necesarios para que hagamos los mejores conciertos.
          </p>
          <ul className="mt-10 flex flex-col gap-6 text-base sm:text-lg xl:text-xl font-semibold">
            <li className="flex gap-2 items-start">
              <FaRegDotCircle color="#C28BF2" size={32} className="shrink-0" />
              Proyecciones de venta de boletos en tiempo real.
            </li>
            <li className="flex gap-2 items-start">
              <FaRegDotCircle color="#C28BF2" size={32} className="shrink-0" />
              Simulaciones de eventos con métricas precisas de retorno.
            </li>
            <li className="flex gap-2 items-start">
              <FaRegDotCircle color="#C28BF2" size={32} className="shrink-0" />
              Estadísticas detalladas sobre artistas populares y tendencias.
            </li>
            <li className="flex gap-2 items-start">
              <FaRegDotCircle color="#C28BF2" size={32} className="shrink-0" />
              Acceso exclusivo a insights del mercado musical.
            </li>
            <li className="flex gap-2 items-start">
              <FaRegDotCircle color="#C28BF2" size={32} className="shrink-0" />
              Control total desde un panel intuitivo.
            </li>
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8">
            <button className="flex gap-2 items-center py-3 px-4 rounded-lg bg-[#9233E9] hover:bg-[#7428bb] text-base font-normal">
              <TbDownload /> Cotiza para un evento
            </button>
            <button className="flex gap-2 items-center py-3 px-4 rounded-lg bg-[#E4E4E7] hover:bg-[#b9b9bb] text-base font-normal text-[#18181B]">
              <TbDownload /> Agenda una consultoría gratuita
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row xl:flex-col gap-6 pb-8 px-4">
          {Statistics.map((item, index) => (
            <StatisticCard
              key={index}
              title={item.title}
              first_percent={item.first_percent}
              second_percent={item.second_percent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
