import { HiOutlineSortDescending } from "react-icons/hi";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SelectWithIcon from "./SelectWithIcon";

function Sort({ options }) {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }, [value, searchParams, setSearchParams]);

  return (
    <SelectWithIcon
      value={value}
      setValue={setValue}
      icon={<HiOutlineSortDescending />}
      options={options}
    ></SelectWithIcon>
  );
}

export default Sort;
