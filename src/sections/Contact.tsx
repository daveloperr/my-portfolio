export default function Contact() {
    return (
        <div className="max-h-screen flex flex-col ml-6 mt-40">
            <h1 className="uppercase lg:text-5xl font-extrabold">
                Have an opportunity or idea in mind? <br /> Drop me a message at
            </h1>
            <h1 className="uppercase lg:text-5xl font-extrabold underline">davelopez.uiux@gmail.com</h1>

            <div className="flex gap-68 mt-10">
                <span className="uppercase lg:text-xs ">(  GET IN TOUCH  )</span>
                <div className="flex">
                    <img src="me.png" className="w-25 h-25 rounded-lg" />

                    <div className="flex flex-col ml-7 h-25 justify-between">
                        <div className="flex flex-col">
                            <span className="uppercase lg:text-xs font-semibold">LinkedIn</span>
                            <span className="uppercase lg:text-xs font-semibold">Github</span>
                            <span className="uppercase lg:text-xs font-semibold">Instagram</span>
                        </div>

                        <span className="uppercase lg:text-xs text-gray-500">
                            Based in Manila, PH
                        </span>
                    </div>
                </div>
                <div className="flex flex-col ml-24">
                    <span className="uppercase lg:text-xs font-semibold">Works</span>
                    <span className="uppercase lg:text-xs font-semibold">About</span>
                    <span className="uppercase lg:text-xs font-semibold">Contact</span>
                </div>




            </div>

            <div className="mt-60 mb-10 lg:text-xs">
                &copy; 2026 DAVELOPEZ.
            </div>
        </div>
    )
};
