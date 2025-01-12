import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
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

function SearchForm({ label }) {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    searchParams.set("search", query);
    setSearchParams(searchParams);
  }
  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <HiOutlineSearch />
      <input
        placeholder={`Search for a ${label}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </StyledSearchForm>
  );
}

export default SearchForm;
