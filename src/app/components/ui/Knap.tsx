export default function Knap({ children, variant="primary", ...props }) {
  const base ="px-4 py-2 rounded-sm cursor-pointer duration-200 md:px-8 md:py-3";
  const styles = 
    variant === "primary"
    ? "bg-[#B64430] border-1 border-[#B64430] text-white hover:bg-[#282828] hover:border-[#282828]"
      : "bg-transparent text-[#B64430] border-1 border-[#B64430] hover:bg-[#282828] hover:text-white hover:border-[#282828]";
  return (
    <button {...props}
    className={`${base} ${styles}`}>
      {children}
    </button>
  );
}