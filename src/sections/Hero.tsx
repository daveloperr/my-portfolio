import NavBar from "./../components/NavBar";



export default function Hero() {
    return (
      <div className="h-screen px-6 flex flex-col justify-between pb-12 ">
            
    <NavBar />

    <div className="w-full pt-4">
                <h3 className="uppercase text-[11.5vw] font-extrabold leading-[0.85] tracking-tighter text-left -ml-[10px]">
                    DaveLopez
                </h3>

    </div>

            <div className="grid grid-cols-12 gap-6 items-end">
                <div className="col-span-7">
                    <h1 className="font-sans lg:text-2xl tracking-tighter max-w-5xl balance">
                        I build reliable, well-engineered web applications that prioritize clean code and exceptional user experience. My focus is on delivering structured, production-ready solutions that look professional and perform flawlessly.
                    </h1>
                </div>

                <div className="col-span-5 flex justify-end">
                    <img
                        src="/me.png"
                        alt="Picture"
                        className="w-[350px] h-[350px] object-cover"
                    />
                </div>
            </div>

        </div>
    );
}