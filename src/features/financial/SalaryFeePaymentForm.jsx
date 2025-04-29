import styled from "styled-components";
import DetailBox from "../../ui/DetailBox";
import Heading from "../../ui/Heading";
import InputRow from "../../ui/InputRow";
import Input from "../../ui/Input";
import ButtonIcon from "../../ui/ButtonIcon";
import SmallUserImg from "../../ui/SmallUserImg";
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineEye, HiOutlinePhone } from "react-icons/hi2";

const StyledBox = styled.div`
  padding: 2rem;
  min-width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const PayUserDetail = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  & > div > strong {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 1.4rem;
    padding: 1px 3px;
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-sm);
  }
  & > span {
    font-size: 1.4rem;
    font-weight: 600;
  }
  border: 1px solid var(--color-grey-200);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-sm);
`;
const StyledConcatedBox = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-weight: 600;
  }
  & > span {
    font-size: 1.2rem;
  }
`;
const StyledPaymentHistoryTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
const StyledPaymentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr 1fr 2.5rem;
  gap: 1rem;
  align-items: center;
  &>: ;
`;
function SalaryFeePaymentForm() {
  return (
    <DetailBox>
      <header>
        <Heading as="h3"> Gerar Pagamento do Salário</Heading>
      </header>
      <StyledBox>
        <form action="">
          <InputRow label="Selecionar Funcionário">
            <Input />
          </InputRow>
        </form>
        <PayUserDetail>
          <div>
            <SmallUserImg src="/default-user.jpg" />
            <StyledConcatedBox>
              <p>Manasse Timóteo</p>
              <span>Professor - Director de Turma</span>
            </StyledConcatedBox>
          </div>
          <div>
            <strong>
              <HiOutlineMail /> manassetimoteo4@gmail.com
            </strong>
            <strong>
              <HiOutlinePhone /> +244 940407979{" "}
            </strong>
          </div>
        </PayUserDetail>{" "}
        <PayUserDetail>
          <span>Referência</span>
          <p>Abril</p>
        </PayUserDetail>
        <PayUserDetail>
          <span>Montante</span>
          <p>30.000,00 KZ</p>
        </PayUserDetail>
        <PayUserDetail>
          <span>Status</span>
          <Tag type="pending">Pendente</Tag>
        </PayUserDetail>
        <PayUserDetail>
          <span>Histórico de Pagamento</span>
          <StyledPaymentHistoryTable>
            <StyledPaymentRow>
              <span>P00300</span>
              <span>30.000Kz</span>
              <span>Abril</span>
              <Tag type="active">successo</Tag>
              <ButtonIcon>
                <HiOutlineEye />
              </ButtonIcon>
            </StyledPaymentRow>
          </StyledPaymentHistoryTable>
        </PayUserDetail>
        <Button>Finalizar Pagamento</Button>
      </StyledBox>
    </DetailBox>
  );
}

export default SalaryFeePaymentForm;
