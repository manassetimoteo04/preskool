import { HiOutlineSortDescending } from "react-icons/hi";
import Select from "./Select";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Sort() {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!value) return;
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }, [value, searchParams, setSearchParams]);
  const options = [
    { value: "", label: "Sort" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];
  return (
    <Select
      value={value}
      setValue={setValue}
      icon={<HiOutlineSortDescending />}
      options={options}
    ></Select>
  );
}

export default Sort;
