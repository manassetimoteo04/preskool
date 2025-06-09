import { HiOutlineCreditCard, HiOutlineIdentification } from "react-icons/hi2";
import DetailNavButton from "../../../ui/DetailNavButton";
import DetailsNav from "../../../ui/DetailsNav";

function StudentTabNav({ active, setActive }) {
  return (
    <DetailsNav>
      <li>
        <DetailNavButton
          activetab={(active === "informations").toString()}
          onClick={() => setActive("informations")}
        >
          <HiOutlineIdentification />
          Informações Pessoais
        </DetailNavButton>
      </li>{" "}
      <li>
        <DetailNavButton
          activetab={(active === "payments").toString()}
          onClick={() => setActive("payments")}
        >
          <HiOutlineCreditCard />
          Histórico de Pagamentos
        </DetailNavButton>
      </li>{" "}
    </DetailsNav>
  );
}

export default StudentTabNav;
