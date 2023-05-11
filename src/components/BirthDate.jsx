/* eslint-disable react/prop-types */
import { AgeContext } from "../context/AgeContext"
import { useContext } from "react"
const BirthDate = ({title,initalData,setData,errorMessage}) => {
   const {error} = useContext(AgeContext)
   console.log(error)
   //const [inputData, setInputData] = useState(null)
   
  //  useEffect(()=>{
  //   setInputData(initalData)
  //  },[initalData])
   return (
     <div className="flex flex-col gap-2  w-[200px]">
       <label className="uppercase text-smokey-grey">{title}</label>
       <input
         type="text"
         value={initalData}
         onChange={(e) => setData(e.target.value)}
         className="border-2 border-light-grey p-3 w-full text-2xl rounded-md"
       />
       <p className="text-red-500">{errorMessage}</p>
     </div>
   );
}

export default BirthDate