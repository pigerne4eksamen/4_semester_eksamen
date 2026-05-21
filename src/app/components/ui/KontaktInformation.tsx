import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";

export default function KontaktInformation() {
  return (
    <section>
        <h2>Kontakt Information</h2>
    <div>
      <h2>Kontakt Information</h2>
      <p>Her kan du finde vores kontaktoplysninger.</p>
      <ul>
        <li>
          <FiPhone /> Telefon: 12345678
        </li>
        <li>
          <HiOutlineMail /> Email: info@example.com
        </li>
        <li>
          <LuClock3 /> Åbningstider: Man-Fre 9:00-17:00
        </li>
      </ul>
    </div>
    </section>
  );
}