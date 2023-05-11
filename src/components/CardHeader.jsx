import { useContext } from "react";
import BirthDate from "./BirthDate";
import { AgeContext } from "../context/AgeContext";
const CardHeader = () => {
  const { day, setDay, month, setMonth, year, setYear, error } =
    useContext(AgeContext);
  return (
    <div className="flex gap-4 max-w-sm mx-auto sm:mx-0">
      <BirthDate
        title="Day"
        initalData={day}
        setData={setDay}
        errorMessage={error.first === "" ? null : error.first}
      />
      <BirthDate
        title="Month"
        initalData={month}
        setData={setMonth}
        errorMessage={error.second === "" ? null : error.second}
      />
      <BirthDate
        title="Year"
        initalData={year}
        setData={setYear}
        errorMessage={error.third === "" ? null : error.third}
      />
    </div>
  );
};

export default CardHeader;
