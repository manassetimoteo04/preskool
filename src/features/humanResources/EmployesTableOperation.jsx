import Row from "../../ui/Row";
import SearchForm from "../../ui/SearchForm";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";

function EmployesTableOperation({ query, setQuery, searchForm = true }) {
  const filterOptions = [
    { value: "", label: "Filtrar" },
    { value: "Doença", label: "Doença" },
    { value: "Férias", label: "Férias" },
    { value: "Outros", label: "Outros" },
  ];
  const sortOptions = [
    { value: "", label: "Ordernar" },
    { value: "createdAt-asc", label: "Crescente (0-10)" },
    { value: "createdAt-desc", label: "Decrescente (10-0)" },
  ];
  return (
    <Row type="horizontal">
      {searchForm && (
        <SearchForm query={query} setQuery={setQuery} label="funcionários" />
      )}
      <Filter query="filter" options={filterOptions} />
      <Sort options={sortOptions} />
    </Row>
  );
}

export default EmployesTableOperation;
