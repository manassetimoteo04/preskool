import styled from "styled-components";
import Heading from "./Heading";
import Row from "./Row";

const StyledPaymentDetail = styled.div`
  display: grid;
`;
function PaymentDetail() {
  return (
    <Row>
      <Heading as="h3">Informações do pagamento</Heading>
      <StyledPaymentDetail></StyledPaymentDetail>
    </Row>
  );
}

export default PaymentDetail;
