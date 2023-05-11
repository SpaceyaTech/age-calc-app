/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
export const AgeContext = createContext({});

export const AgeContextProvider = ({ children }) => {
  const [day, setDay] = useState(24);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1984);
  const [error, setIsError] = useState({
    first: "",
    second: "",
    third: "",
  });
  const [calculatedDays, setCalculatedDays] = useState(0);
  const [calculatedMonths, setCalculatedMonths] = useState(0);
  const [calculatedYears, setCalculatedYears] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Error checking
 
    calculateAge();
  };
  const calculateAge = () => {
    if (day > 31 || day <= 0) {
      //  setIsError(true)
      
      setIsError((prev) => {
        console.log(prev);
        console.log(prev);
        return { ...prev, first: "Must be a valid day" };
      });
      setCalculatedDays(0);
      setCalculatedMonths(0);
      setCalculatedYears(0);
      
    }
    if(month <= 0 || month > 12){
         setIsError((prev) => {
           console.log(prev);
           console.log(prev);
           return { ...prev, second: "Must be a valid month" };
         });
         setCalculatedDays(0);
         setCalculatedMonths(0);
         setCalculatedYears(0);
        
    }
    if(year > new Date().getFullYear() || year  <= 1923){
      setIsError((prev) => {
        console.log(prev);
        console.log(prev);
        return { ...prev, third: "Must be in the past" };
      });
      setCalculatedDays(0);
      setCalculatedMonths(0);
      setCalculatedYears(0);
      
    }

    // Find current date
    const date = new Date().getTime();
    // Get the number of milliseconds since 1970
    //console.log(date)

    // Get the number of milliseconds from the user input
    const birthDay = new Date(`${year}-${month}-${day}`).getTime();

    // Age of the user in milliseconds
    const ageMilliseconds = date - birthDay;
    const ageInYears = ageMilliseconds / 1000 / 60 / 60 / 24 / 365;

    const ageInMonths = (ageInYears % 1) * 12;
    const days = Math.floor((ageInMonths % 1) * 30);
    const years = Math.floor(ageInYears);
    const months = Math.floor(ageInMonths);
    // Days are between: 1-31
    // Months are between: 1-12
    // Years are between 1-99
    setCalculatedDays(days);
    setCalculatedMonths(months);
    setCalculatedYears(years);

     console.log(`${days},${months},${years}`);
  };

  

  return (
    <AgeContext.Provider
      value={{
        calculatedDays,
        calculatedMonths,
        calculatedYears,
        setDay,
        setMonth,
        setYear,
        day,
        month,
        year,
        calculateAge,
        error,
        handleSubmit
      }}
    >
      {children}
    </AgeContext.Provider>
  );
};
