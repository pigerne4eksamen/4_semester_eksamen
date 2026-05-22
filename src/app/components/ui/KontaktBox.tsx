type KontaktInfoBoxProps = {
  icon: React.ReactNode;
  label: string;
  text: string;
};

export default function KontaktInfoBox({ icon, label, text }: KontaktInfoBoxProps) {
  return (
    <div className=" p-4 flex items-center gap-4 w-fit cursor-default">
      <div className="text-[#B64430]">{icon}</div>
      <div>
        <div className=" font-bold text-[#282828] leading-none">{label}</div>
        <div className="text-[#282828] mt-1">{text}</div>
      </div>
    </div>
  );
}