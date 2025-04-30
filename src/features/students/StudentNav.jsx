import {
  HiOutlineArchiveBoxArrowDown,
  HiOutlineBookmark,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import DetailsNav from "../../ui/DetailsNav";
import DetailNavButton from "../../ui/DetailNavButton";

function StudentNav({ active, setActive }) {
  return (
    <DetailsNav>
      <li>
        <DetailNavButton
          activetab={(active === "informations").toString()}
          onClick={() => setActive("informations")}
        >
          <HiOutlineExclamationCircle />
          Informações
        </DetailNavButton>
      </li>{" "}
      <li>
        <DetailNavButton
          activetab={(active === "marks").toString()}
          onClick={() => setActive("marks")}
        >
          <HiOutlineBookmark />
          Notas
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

export default StudentNav;
