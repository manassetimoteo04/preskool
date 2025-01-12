import styled from "styled-components";
import Button from "./Button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
const StyledPagination = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  function nextPage() {
    const next = currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const next = currentPage === 1 ? 1 : currentPage - 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  return (
    <StyledPagination>
      <Button size="small" onClick={prevPage}>
        <HiChevronLeft />
      </Button>
      <span>{currentPage}</span>
      <Button size="small" onClick={nextPage}>
        <HiChevronRight />
      </Button>
    </StyledPagination>
  );
}

export default Pagination;
