// src/app/components/ui/HvadSkalInkluderes.tsx

const punkter = [
  "Type af renovation eller reparation",
  "Din ejendoms lokation",
  "En ønsket tidsramme",
  "Foto af området (hvis muligt)",
  "Hvis du har nogle bestemte ønsker",
];

const HvadSkalInkluderes = () => (
  <div className="bg-[#eaf1ec] rounded-lg shadow p-6 md:p-8 max-w-xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Hvad skal inkluderes</h2>
    <ul className="list-disc pl-6 space-y-3">
      {punkter.map((punkt, i) => (
        <li key={i}>{punkt}</li>
      ))}
    </ul>
  </div>
);

export default HvadSkalInkluderes;