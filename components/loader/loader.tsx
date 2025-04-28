import "./loader.css"

const Loader = () => {
  return (
    <div className="loader flex flex-col justify-center items-center min-h-screen bg-[#000]">
      <h1 className="text-[2.5rem] uppercase font-[1000] italic text-center leading-[0.9] bg-gradient-to-b from-[#3a3a3a] to-white bg-clip-text text-transparent">
        XT
      </h1>
      <h1 className="text-[2.5rem] uppercase italic font-[1000] text-center leading-[0.9] bg-gradient-to-b from-[#3a3a3a] to-white bg-clip-text text-transparent">
        MANI
      </h1>
    </div>
  )
}

export default Loader
