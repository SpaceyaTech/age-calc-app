import Age from "./components/Age"
import ArrowIcon from "./components/ArrowIcon"
import CardHeader from "./components/CardHeader"
import { AgeContext } from "./context/AgeContext"
import { useContext, useEffect } from "react"
function App() {
  const {handleSubmit,calculateAge} = useContext(AgeContext)
  useEffect(()=>{
      console.log("Effect has been executed")
      calculateAge()
  },[])
  return (
    <main className="bg-off-white min-h-screen flex justify-center items-center font-ff-poppins">
      <article className="bg-white shadow-sm w-[90%] sm:w-[50%] rounded-xl py-12 rounded-br-[3.5rem] p-4">
        <form onSubmit={handleSubmit}>
          <CardHeader />
          <ArrowIcon />
        </form>
        <Age />
      </article>
    </main>
  )
}

export default App
