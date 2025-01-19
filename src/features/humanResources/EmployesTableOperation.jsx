import { useState } from "react";
import Row from "../../ui/Row";
import SearchForm from "../../ui/SearchForm";

function EmployesTableOperation() {
  const [query, setQuery] = useState("");
  return (
    <Row type="horizontal">
      <SearchForm query={query} setQuery={setQuery} label="funcionários" />
    </Row>
  );
}

export default EmployesTableOperation;
