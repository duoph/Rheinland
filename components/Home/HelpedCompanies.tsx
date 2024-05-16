import Image from "next/image"


const HelpedCompanies = () => {
    return (
        <div className=" bg-gray-300 flex flex-col items-center justify-center flex-wrap px-3 py-3 ">
            <div className="flex items-center justify-start w-full">
                <span className="text-start font-light opacity-80 text-white">Companies we helped grow</span>
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap gray-scale">
                <Image src={'/rheinlandWhiteLogo.png'} alt="WhiteLogo" height={100} width={100} />
                <Image src={'/rheinlandWhiteLogo.png'} alt="WhiteLogo" height={100} width={100} />
                <Image src={'/rheinlandWhiteLogo.png'} alt="WhiteLogo" height={100} width={100} />
                <Image src={'/rheinlandWhiteLogo.png'} alt="WhiteLogo" height={100} width={100} />
            </div>

        </div>
    )
}

export default HelpedCompanies