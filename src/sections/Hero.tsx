export default function Hero() {
    return (
        <div className="h-screen flex flex-col px-5 overflow-hidden">

            <div className="flex justify-between items-start">
                <h1 className="py-5 lg:text-5xl tracking-tighter">
                    Building
                    <span className="font-serif italic font-medium tracking-normal ml-2">
                        Digital Experiences
                    </span>
                    <br />through code.
                </h1>

                <img
                    src="/me.png"
                    alt="Dave Lopez Picture"
                    className="w-[350px] h-[350px] object-cover"
                />
            </div>

            <div className="mt-auto pb-12 flex flex-col ">
                <h2 className="font-sans uppercase text-2xl text-gray-400 -mb-2 tracking-tighter text-left">
                    Becoming
                </h2>

                <h3 className="uppercase text-[200px] font-bold leading-[0.85] tracking-tighter text-left -ml-[10px]">
                    DaveLopez
                </h3>
            </div>
        </div>
    );
}