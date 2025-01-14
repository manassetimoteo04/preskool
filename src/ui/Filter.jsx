import { useEffect, useState } from "react";
import Select from "./Select";
import { HiOutlineFilter } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

function Filter({ query, options }) {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!value) return;
    searchParams.set(query, value);
    setSearchParams(searchParams);
  }, [value, searchParams, setSearchParams, query]);

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
