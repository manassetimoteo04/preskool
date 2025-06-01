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

export function generateSubjectCode(name) {
  const list = ["e", "a", "da", "de", "do"];
  let prefix = name.trim().substring(0, 3).toUpperCase();
  const splited = name.split(" ");
  if (splited.length > 1)
    prefix = splited
      .map((st) => {
        if (list.includes(st.toLowerCase())) return;
        return st.at(0);
      })
      .join("")
      .toUpperCase();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}${random}`;
}
export function generateClasseCode(variation, grade, course, period) {
  return (
    variation +
    grade.match(/\d+/g) +
    course.trim().substring(0, 3).toUpperCase() +
    period.at(0).toUpperCase()
  );
}
