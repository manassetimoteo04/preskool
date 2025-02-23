import Row from "../../ui/Row";
import SearchForm from "../../ui/SearchForm";
import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";

function EmployesTableOperation({ query, setQuery }) {
  const filterOptions = [
    { value: "", label: "Filtrar" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];
  const sortOptions = [
    { value: "", label: "Ordernar" },
    { value: "fullName-asc", label: "Nome (A-Z)" },
    { value: "fullName-desc", label: "Nome (Z-A)" },
    { value: "createdAt-asc", label: "Adesão (0-10)" },
    { value: "createdAt-desc", label: "Adesão (10-0)" },
  ];
  return (
    <Row type="horizontal">
      <SearchForm query={query} setQuery={setQuery} label="funcionários" />
      <Filter query="filter" options={filterOptions} />
      <Sort options={sortOptions} />
    </Row>
  );
}

export default EmployesTableOperation;
