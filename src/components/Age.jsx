import { useContext } from "react"
import { AgeContext } from "../context/AgeContext"
const Age = () => {
  const {calculatedDays,calculatedMonths,calculatedYears} = useContext(AgeContext)
//  const isZero = (num) => !num === 0
//  console.log(isZero(calculatedDays))
const isNumber = (num) => !isNaN(num)

  return (
    <section className="flex flex-col mt-8 text-start gap-1 text-6xl sm:text-7xl font-extrabold italic">
      <p>
        <span className="text-purple">
          {isNumber(calculatedYears) ? calculatedYears : "--"}
        </span>{" "}
        years
      </p>
      <p>
        <span className="text-purple">
          {isNumber(calculatedMonths) ? calculatedMonths : "--"}
        </span>{" "}
        months
      </p>
      <p>
        <span className="text-purple">
          {isNumber(calculatedDays) ? calculatedDays : "--"}
        </span>{" "}
        days
      </p>
    </section>
  );
}

export default Age