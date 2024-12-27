import React, { useState } from 'react';
import Flag from 'react-world-flags';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const countries = [
  { code: 'col', name: 'Colombia' },
  { code: 'mex', name: 'México' },
  { code: 'usa', name: 'Estados Unidos' },
];

export const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-w-[190px] w-auto z-50">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flag code={selectedCountry.code} width={30} className="mr-2" />
        <span className="font-normal text-base">{selectedCountry.name}</span>
        {isOpen ? (
          <TiArrowSortedUp width={24} height={24} className="ml-8" />
        ) : (
          <TiArrowSortedDown width={24} height={24} className="ml-8" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#14171F] rounded-md mt-1 z-50 shadow-lg">
          <ul>
            {countries.map((country) => (
              <li
                key={country.code}
                className="px-3 py-2 hover:bg-gray-700 cursor-pointer flex items-center"
                onClick={() => {
                  setSelectedCountry(country)
                  setIsOpen(false)
                }}
              >
                <Flag code={country.code} width={20} className="mr-2" />
                <span className="text-white">{country.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
