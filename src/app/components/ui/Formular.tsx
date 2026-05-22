// src/app/components/ui/Formular.tsx


import Knap from "./Knap";
import { BsImage } from "react-icons/bs";

const inputBase =
  "border border-[#E5E5E5] rounded-md px-4 py-3 bg-[#FAFAFA] placeholder-[#D1D5DB] text-[#282828] text-base focus:outline-none focus:ring-2 focus:ring-[#B64430]";

const Formular = () => (
  <div>
    <div>
      <h2 className="text-[#ffffff] text-3xl font-bold text-center m-4">Send os en besked</h2>
    </div>
    <form
      className="bg-[#ffffff] rounded-sm shadow-md p-4 sm:p-8 md:p-10 flex flex-col gap-6 w-full max-w-full  md:max-w-175 border border-[#E5E5E5]!"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
          <label htmlFor="navn">Navn*</label>
          <input
            id="navn"
            className={inputBase}
            type="text"
            placeholder="Skriv dit fulde navn"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefon">Telefon*</label>
          <input
            id="telefon"
            className={inputBase}
            type="tel"
            placeholder="+45 XX XX XX XX"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail*</label>
          <input
            id="email"
            className={inputBase}
            type="email"
            placeholder="Test@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="adresse">Adresse*</label>
          <input
            id="adresse"
            className={inputBase}
            type="text"
            placeholder="Adresse"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="postnr">Post nr.*</label>
          <input
            id="postnr"
            className={inputBase}
            type="text"
            placeholder="Post nr."
            required
          />
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
          <label htmlFor="besked">Besked*</label>
          <textarea
            id="besked"
            className={inputBase}
            rows={3}
            placeholder="Fortæl os om dit projekt."
            required
          />
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
        <label htmlFor="billede">Billede</label>
        <div className="relative border-2 border-dashed border-[#E5E5E5] rounded-sm bg-[#FAFAFA] flex flex-col items-center justify-center h-36 cursor-pointer hover:border-[#B64430] transition-colors">
          <BsImage size={48} color="#D1D5DB" />
          <span className="text-[#D1D5DB] mt-2 text-lg">Indsæt billede her</span>
          <input
            id="billede"
            type="file"
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-end mt-4">
      <Knap>Knap</Knap>
    </div>
    </form>
  </div>
);

export default Formular;