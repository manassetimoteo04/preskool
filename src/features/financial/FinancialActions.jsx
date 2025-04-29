import { HiEllipsisVertical, HiPlus } from "react-icons/hi2";
import Menus from "../../ui/Menus";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";
import SalaryFeePaymentForm from "./SalaryFeePaymentForm";
function FinancialActions() {
  return (
    <Modal>
      <div>
        <Menus>
          <Menus.Toggle showIcon={false} menuId="options">
            <ButtonIcon>
              <HiEllipsisVertical />
            </ButtonIcon>
          </Menus.Toggle>
          <Menus.Menu menuId="options">
            <Menus.List>
              <Modal.Open opens="salary-form">
                <Menus.Button icon={<HiPlus />}>Pagar Salário</Menus.Button>
              </Modal.Open>{" "}
              <Modal.Open opens="fee-form">
                <Menus.Button icon={<HiPlus />}>Pagar Propina</Menus.Button>
              </Modal.Open>
              <Menus.Button icon={<HiPlus />}>Criar Depesas</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Menus>
      </div>
      <Modal.Window name="salary-form" buttonClose={true}>
        <SalaryFeePaymentForm isEmployee={true} />
      </Modal.Window>{" "}
      <Modal.Window name="fee-form" buttonClose={true}>
        <SalaryFeePaymentForm isStudent={true} />
      </Modal.Window>
    </Modal>
  );
}

export default FinancialActions;
