import styled from "styled-components";
import InputRow from "../../../ui/InputRow";
import PopupList from "../../../ui/PopupList";
import Input from "../../../ui/Input";
import { useState } from "react";
import { useTeachers } from "../../teachers/useTeachers";
import Empty from "../../../ui/Empty";
import SmallUserImg from "../../../ui/SmallUserImg";
import { normalizeText } from "../../../utils/helpers";
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

const StyledForm = styled.div`
  position: relative;
`;

function SearchLinkForm({ setTeacher }) {
  const { teachers, isLoading } = useTeachers();
  const [query, setQuery] = useState("");

  const filteredData = teachers?.filter((el) =>
    normalizeText(el.fullName)?.startsWith(normalizeText(query))
  );
  return (
    <StyledForm action="">
      <InputRow>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      </InputRow>
      {query && (
        <PopupList>
          {isLoading ? (
            <Empty>Carregando...</Empty>
          ) : filteredData.length ? (
            filteredData.map((e) => (
              <div
                key={e.id}
                onClick={() => setTeacher({ name: e.fullName, id: e.id })}
              >
                <SmallUserImg src={e.biDocument || "/default-user.jpg"} />
                <StyledConcatedBox>
                  <p>{e["fullName"]}</p>
                  <span>
                    {e.qualification} &mdash; {e.emailAddress}
                  </span>
                </StyledConcatedBox>
              </div>
            ))
          ) : (
            <Empty>Nenhum resultado para {query}</Empty>
          )}
        </PopupList>
      )}
    </StyledForm>
  );
}

export default SearchLinkForm;
