import { useEffect, useState } from "react";
import Select from "./Select";
import { HiOutlineFilter } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

function Filter({ query }) {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!value) return;
    searchParams.set(query, value);
    setSearchParams(searchParams);
  }, [value, searchParams, setSearchParams, query]);
  const options = [
    { value: "", label: "Filtrar" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];
  return (
    <Select
      value={value}
      setValue={setValue}
      icon={<HiOutlineFilter />}
      options={options}
    ></Select>
  );
}

export default Filter;
