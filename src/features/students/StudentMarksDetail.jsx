import styled from "styled-components";
import StudentsMarksTable from "../../ui/StudentsMarksTable";
import Heading from "../../ui/Heading";
import Select from "../../ui/Select";
import { useState } from "react";
import { HiArrowDown, HiArrowUp } from "react-icons/hi2";
const StyledHeader = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const SpanIcon = styled.span`
  color: var(--color-${(props) => (!props.isApprovad ? "brand" : "red")}-500);
`;

const studentGrades = [
  {
    subject: "Math",
    terms: [
      { term: "1st", mac: 12.0, mpp: 13.5, final: 12.8, approval: "35%" },
      { term: "2nd", mac: 10.5, mpp: 11.0, final: 10.8, approval: "72%" },
      { term: "3rd", mac: 14.0, mpp: 13.0, final: 13.5, approval: "90%" },
    ],
  },
  {
    subject: "Physics",
    terms: [
      { term: "1st", mac: 9.0, mpp: 8.5, final: 8.7, approval: "60%" },
      { term: "2nd", mac: 11.0, mpp: 10.5, final: 10.7, approval: "70%" },
      { term: "3rd", mac: 10.0, mpp: 9.5, final: 9.7, approval: "66%" },
    ],
  },
  {
    subject: "Chemistry",
    terms: [
      { term: "1st", mac: 8.5, mpp: 7.0, final: 7.5, approval: "55%" },
      { term: "2nd", mac: 10.0, mpp: 9.0, final: 9.5, approval: "65%" },
      { term: "3rd", mac: 11.0, mpp: 10.5, final: 10.7, approval: "72%" },
    ],
  },
  {
    subject: "Portuguese",
    terms: [
      { term: "1st", mac: 13.0, mpp: 14.0, final: 13.5, approval: "92%" },
      { term: "2nd", mac: 12.0, mpp: 13.0, final: 12.5, approval: "85%" },
      { term: "3rd", mac: 14.5, mpp: 15.0, final: 14.7, approval: "95%" },
    ],
  },
  {
    subject: "History",
    terms: [
      { term: "1st", mac: 11.0, mpp: 10.0, final: 10.5, approval: "70%" },
      { term: "2nd", mac: 13.0, mpp: 13.5, final: 13.2, approval: "88%" },
      { term: "3rd", mac: 12.0, mpp: 12.5, final: 12.3, approval: "80%" },
    ],
  },
];

function StudentMarksDetail() {
  const [currentTerm, setCurrentTerm] = useState(0);
  return (
    <StudentsMarksTable columns="3fr 2fr 2fr 2fr 1.5fr 2rem">
      <StyledHeader>
        <Heading as="h3">Notas do aluno</Heading>
        <Select
          value={currentTerm}
          onChange={(e) => setCurrentTerm(+e.target.value)}
        >
          <option value="0">I Trimestre</option>
          <option value="1">II Trimestre</option>
          <option value="2">III Trimestre</option>
        </Select>
      </StyledHeader>
      <StudentsMarksTable.Header>
        <span>Disciplina</span>
        <span>MAC</span>
        <span>MPP</span>
        <span>MF</span>
        <span>Aprov.</span>
        <span></span>
      </StudentsMarksTable.Header>
      <StudentsMarksTable.Body
        data={studentGrades}
        render={(grade) => (
          <StudentsMarksTable.Row>
            <span>{grade.subject}</span>
            <SpanIcon isApprovad={grade.terms[currentTerm].mac <= 10}>
              {grade.terms[currentTerm].mac}
            </SpanIcon>{" "}
            <SpanIcon isApprovad={grade.terms[currentTerm].mpp <= 10}>
              {grade.terms[currentTerm].mpp}
            </SpanIcon>{" "}
            <SpanIcon
              isApprovad={
                +grade.terms[currentTerm].approval
                  .split("")
                  .slice(0, -1)
                  .join("") <= 50
              }
            >
              {grade.terms[currentTerm].approval}
            </SpanIcon>{" "}
            <SpanIcon isApprovad={grade.terms[currentTerm].mac <= 10}>
              {grade.terms[currentTerm].mac}
            </SpanIcon>{" "}
            <SpanIcon isApprovad={grade.terms[currentTerm].final <= 10}>
              {grade.terms[currentTerm].final <= 10 ? (
                <HiArrowDown />
              ) : (
                <HiArrowUp />
              )}
            </SpanIcon>
          </StudentsMarksTable.Row>
        )}
      />
    </StudentsMarksTable>
  );
}

export default StudentMarksDetail;
