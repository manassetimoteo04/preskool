import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

export function usePagination(list) {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const fromPage = (currentPage - 1) * PAGE_SIZE;
  const toPage = fromPage + PAGE_SIZE;
  const totalPages = Math.ceil(list.length / PAGE_SIZE);
  const data = list.slice(fromPage, toPage);
  return { data, fromPage, toPage, totalPages, currentPage };
}
