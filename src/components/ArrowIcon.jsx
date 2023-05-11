import arrowDown from "../assets/images/icon-arrow.svg"
const ArrowIcon = () => {
  return (
    <div className="mt-10 relative">
    <div className="border border-light-grey w-full absolute top-[50%]"></div>
    <button type="submit" className="w-20 aspect-square bg-purple rounded-full  mx-auto flex items-center justify-center relative z-10 sm:mx-0 sm:ml-[87%]">
        <img src={arrowDown} alt="Down arrow icon" className="w-9"/>       
    </button>
    </div>
  )
}

export default ArrowIcon