import { differenceInDays } from "date-fns";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("pt", { style: "currency", currency: "AOA" }).format(
    value
  );

export function formatDate(date) {
  return new Intl.DateTimeFormat("pt", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function calcAge(year) {
  const birthYear = new Date(year).getFullYear();
  return Number(new Date().getFullYear()) - Number(birthYear);
}

export function normalizeText(string) {
  return string
    ?.normalize("NFD")
    ?.replace(/[\u0300-\u036f]/g, "")
    ?.toLowerCase();
}

export function calcDaysDiference(date1, date2) {
  return differenceInDays(new Date(date1), new Date(date2));
}
