import Knap from "../../components/ui/Knap";
import KontaktInformation from "../../components/ui/KontaktInformation";
import Formular from "../../components/ui/Formular";
import HvadSkalInkluderes from "../../components/ui/HvadSkalInkluderes";

export default function KontaktPage() {
  return (
    <main className="bg-[#F8F3EA] min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Kontakt os</h1>
        <p className="mb-8 text-sm max-w-lg">
          Udfyld vores kontaktformular og få et godt tilbud til rav. Er du i tvivl om noget må du selv finde ud af det. Ses.
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Formular */}
          <div className="bg-[#545943] rounded-lg p-6 flex-1 flex items-center justify-center">
            <Formular />
          </div>
          {/* Kontakt info + Hvad skal inkluderes */}
          <div className="flex flex-col items-center gap-6">
            <KontaktInformation />
            <div className="mt-0 md:mt-16">
              <HvadSkalInkluderes />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
