import { parseISO, format } from "date-fns";

export const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time className="dark:text-[#fafafa] tracking-wider text-gray-500" dateTime={dateString}>{format(date, "LLLL d yyyy")}</time>;
};
