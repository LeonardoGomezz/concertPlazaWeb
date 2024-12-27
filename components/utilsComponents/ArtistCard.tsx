import React from "react";
import { ArtistCardProps } from "./types";

export const ArtistCard = ({
  image,
  title,
  description,
  label_tag,
}: ArtistCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[347px] relative">
      <p className="w-fit py-1 px-2 rounded-full font-normal text-[12.8px] bg-[#2A3141] text-[#9CF3E6] absolute top-3 right-3">{label_tag}</p>
      <img alt={title} src={image} className="h-56 w-full object-cover" />

      <div className="bg-[#202531] p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-xl font-semibold text-[#E4E4E7]">
            {title}
          </h3>
        </a>
        <p className="text-sm font-normal mt-2">{description}</p>

        <button className="mt-4 w-full py-3 rounded-xl text-[#18181B] bg-[#E4E4E7] hover:bg-transparent hover:border-[1px] hover:border-[#E4E4E7] hover:text-[#E4E4E7]">
          ¡Lo quiero en mi ciudad!
        </button>
      </div>
    </article>
  );
};
