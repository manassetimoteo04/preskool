import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

const StyledSearchForm = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 0.7rem;
  background-color: var(--color-grey-0);
  font-size: inherit;
  border-radius: var(--border-radius-sm);
  border: none;
  border: 1px solid var(--color-grey-200);
  & > input {
    background-color: var(--color-grey-0);
    border: none;
    padding: 0.7rem 0;
    &:focus {
      outline: none;
    }
  }

  & > svg {
    font-size: 2.4rem;
    border-right: 2px solid var(--color-grey-200);
    padding-right: 3px;
  }
`;

function SearchForm({ label, query, setQuery }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    e.preventDefault();
    if (searchParams.get("page") && +searchParams.get("page") > 1) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
    setQuery(e.target.value);
  }

  return (
    <StyledSearchForm>
      <HiOutlineSearch />
      <input
        placeholder={`Procurar ${label}`}
        value={query}
        onChange={handleChange}
      />
    </StyledSearchForm>
  );
}

export default SearchForm;
