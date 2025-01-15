import { useEffect, useState } from "react";

import { HiOutlineFilter } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import SelectWithIcon from "./SelectWithIcon";

function Filter({ query, options }) {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!value) return;
    searchParams.set(query, value);
    setSearchParams(searchParams);
  }, [value, searchParams, setSearchParams, query]);

  return (
    <SelectWithIcon
      value={value}
      setValue={setValue}
      icon={<HiOutlineFilter />}
      options={options}
    ></SelectWithIcon>
  );
}

export default Filter;
