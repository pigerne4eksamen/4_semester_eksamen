import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import KontaktBox from "./KontaktBox";

export default function KontaktInformation() {
  return (
    <section>
    <div>
      <h2>Kontakt Information</h2>
      <ul>
        <li>
          <KontaktBox
            icon={<FaPhoneAlt size={32} />}
            label="Telefon"
            text="+45 26 13 80 37"
          /> 
        </li>
        <li>
          <KontaktBox
            icon={<MdMail size={36} />}
            label="Email"
            text="info@example.com"
          />
        </li>
        <li>
          <KontaktBox
            icon={<BsClockFill size={32} />}
            label="Åbningstider"
            text="Man-Fre 9:00-17:00"
          />
        </li>
      </ul>
    </div>
    </section>
  );
}