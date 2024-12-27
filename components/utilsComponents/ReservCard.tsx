import React from "react";
import { LuTicket } from "react-icons/lu";

export const ReservCard = () => {
  return (
    <div className="max-w-[1024px] mx-auto bg-[#202531] p-8 rounded-xl">
      <p className="font-bold text-xl sm:text-2xl flex gap-2 items-center">
        <span>
          <LuTicket size={30} />
        </span>
        ¡Reserva tus boletos aquí!
      </p>
      <form className="mt-6 flex flex-col lg:flex-row items-center lg:items-end gap-10">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex flex-col gap-3">
            <label className="font-normal text-base text-[#E4E4E7]">
              Artista
            </label>
            <select className="bg-[#323A4B] p-3 rounded-lg w-[300px] xs:w-[320px] text-[#A1A1AA]">
              <option>Ferxxo</option>
              <option>Karol G</option>
              <option>Dj Nova</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-normal text-base text-[#E4E4E7]">
              Fecha y Ciudad
            </label>
            <input
              type="date"
              name=""
              id=""
              className="bg-[#323A4B] p-2 rounded-lg w-[300px] xs:w-[320px] text-[#75758a]"
            />
          </div>
        </div>
        <button className="text-[#E4E4E7] py-3 px-12 rounded-lg bg-[#9233E9] hover:bg-[#6f27b3] text-[12.8px]">
          Ver boletos disponibles
        </button>
      </form>
    </div>
  );
};
