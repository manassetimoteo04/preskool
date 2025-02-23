import {
  HiOutlineArchiveBoxArrowDown,
  HiOutlineCurrencyDollar,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import DetailsNav from "../../ui/DetailsNav";
import DetailNavButton from "../../ui/DetailNavButton";

function EmployeeNav({ active, setActive }) {
  return (
    <DetailsNav>
      <li>
        <DetailNavButton
          activetab={(active === "basic-details").toString()}
          onClick={() => setActive("basic-details")}
        >
          <HiOutlineExclamationCircle />
          Detalhes
        </DetailNavButton>
      </li>{" "}
      <li>
        <DetailNavButton
          activetab={(active === "payments").toString()}
          onClick={() => setActive("payments")}
        >
          <HiOutlineCurrencyDollar />
          Pagamentos
        </DetailNavButton>
      </li>{" "}
      <li>
        <DetailNavButton
          activetab={(active === "missings").toString()}
          onClick={() => setActive("missings")}
        >
          <HiOutlineArchiveBoxArrowDown />
          Faltas
        </DetailNavButton>
      </li>
    </DetailsNav>
  );
}

export default EmployeeNav;
