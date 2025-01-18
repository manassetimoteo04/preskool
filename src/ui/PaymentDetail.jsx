import styled from "styled-components";
import Heading from "./Heading";
import Row from "./Row";
import Tag from "./Tag";
import AlertMessage from "./AlertMessage";
import { HiOutlinePrinter } from "react-icons/hi2";
import Button from "./Button";

const StyledPaymentDetail = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  & > span {
    padding: 1rem;
  }
`;
const ButtonsGroup = styled.div`
  display: flex;
  justify-content: end;
  padding: 2rem;

  gap: 1rem;
`;
const PaymentDetailBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  & > strong {
    border-right: 1px solid var(--color-grey-200);
    padding: 1.5rem 2rem;
    justify-content: end;
    display: flex;
    width: 100%;
  }
  & > strong:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-200);
  }
  & > div {
    padding: 1rem 2rem;
    justify-content: start;
    display: flex;
  }
`;

const DetailBox = styled.div`
  & > header {
    padding: 1.5rem 2rem;
    min-width: 40rem;
    border-bottom: 1px solid var(--color-grey-200);
  }
`;

function PaymentDetail() {
  return (
    <Row>
      <DetailBox>
        <header>
          <Heading as="h3">Informações do pagamento</Heading>
        </header>
        <StyledPaymentDetail>
          <PaymentDetailBox>
            <>
              <strong>Status</strong>
              <div>
                <Tag type="pending">Pendente</Tag>
              </div>
            </>{" "}
            <>
              <strong>ID Pagamento</strong>
              <div>
                <span>IDSDSDGSDFG</span>
              </div>
            </>{" "}
            <>
              <strong>Data</strong>
              <div>
                <span>15:20 - 12 Jan 2023 </span>
              </div>
            </>{" "}
            <>
              <strong>Montante</strong>
              <div>
                <span>100.000,00 KZ</span>
              </div>
            </>{" "}
            <>
              <strong>Referente ao mês</strong>
              <div>
                <span>Abril</span>
              </div>
            </>{" "}
            <>
              <strong>Destinatário</strong>
              <div>
                <span>Manasse Timóteo</span>
              </div>
            </>{" "}
            <>
              <strong>Número da conta</strong>
              <div>
                <span>100.123.44.5.00</span>
              </div>
            </>{" "}
          </PaymentDetailBox>
          <span>
            <AlertMessage>
              <span>
                Atenção: Todos os pagamentos são processados de forma segura e
                confidencial.
              </span>
            </AlertMessage>
          </span>
          <ButtonsGroup>
            <Button>
              Imprimir
              <HiOutlinePrinter />
            </Button>
          </ButtonsGroup>
        </StyledPaymentDetail>
      </DetailBox>
    </Row>
  );
}

export default PaymentDetail;
