import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import SpinnerMini from "../../ui/SpinnerMini";
import { useStudent } from "./useStudent";
import styled from "styled-components";
import Button from "../../ui/Button";
import { HiArrowLeft } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import StudentMarkTable from "./StudentMarkTable";
const StyledDetailBox = styled.div`
  background-color: var(--color-grey-0);

  & > h4 {
    background-color: var(--color-brand-100);
    padding: 2rem 3rem;
  }
`;
const StyledDetail = styled.div`
  padding: 2rem 3rem;
`;
const Img = styled.img`
  object-fit: cover;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 4px solid
    var(--color-${(props) => (props.type === "active" ? "yellow" : "red")}-100);
`;
const FlexBox = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  align-items: center;
  & > span {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    gap: 0.3rem;
  }
  & > span > strong > svg {
    font-size: 1%.4;
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    & > h1 {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
  }
`;

const array = Array.from({ length: 9 }, (_, index) => index);
function StudentMarksDetail() {
  const { data, isLoading } = useStudent();
  const navigate = useNavigate();
  if (isLoading) return <SpinnerMini />;
  const {
    biUpload,
    fullName,
    status,
    schoolYear,
    course,
    grade,
    schoolPeriod,
  } = data;

  return (
    <Row>
      <Row type="horizontal">
        <Heading as="h2">Notas do Estudante #{data?.internNumber}</Heading>
        <Button onClick={() => navigate(-1)}>
          <HiArrowLeft /> Voltar
        </Button>
      </Row>
      <StyledDetailBox>
        <Heading as="h4">Notas do aluno #{data?.internNumber}</Heading>

        <StyledDetail>
          <FlexBox>
            <Img src={biUpload} />
            <div>
              <Heading as="h1">
                {fullName}

                <Tag type={status}>{status}</Tag>
              </Heading>
              <FlexBox>
                <span>Taxa de aproveitamento</span>
                &mdash;
                <span>40%</span>
              </FlexBox>
            </div>
          </FlexBox>
        </StyledDetail>
        <StyledDetail>
          <FlexBox>
            <div>
              <Heading as="h3">Ano lectivo &mdash; {schoolYear}</Heading>
              <FlexBox>
                <span>{course}</span>
                &mdash;
                <span>{grade}ª Classe</span>
                &mdash;
                <span>{schoolPeriod}</span>
              </FlexBox>
            </div>
          </FlexBox>
          <StudentMarkTable>
            <StudentMarkTable.Header />
            <StudentMarkTable.Body
              data={array}
              render={() => (
                <StudentMarkTable.Row>
                  <span>Língua Portuguesa</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                  <span>10</span>
                </StudentMarkTable.Row>
              )}
            />
          </StudentMarkTable>
        </StyledDetail>
      </StyledDetailBox>
    </Row>
  );
}

export default StudentMarksDetail;
