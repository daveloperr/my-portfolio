


export default function NavBar() {
    return (
        <div className="flex items-center justify-between py-1 border-b border-gray-200 lg:px-5">
            <div className=" font-sans font-bold lg:text-2xl text-xl">
                DEV.LOPEZ
            </div>
            <div className="flex items-center gap-5 font-sans font-medium lg:text-md text-base p-1 cursor-pointer">
                <span>
                    davelopez.uiux@gmail.com
                </span>

                <span className=" text-center border p-2 w-25 bg-black text-white">
                    Contact
                </span>
            </div>
        </div>

    )

}