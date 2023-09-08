



export default function Footer(){
    return(
        <footer className="pt-[80px] pb-[83px] flex items-center justify-center bg-gray-300">
                <div className="w-full max-w-[990px] px-5 flex flex-col justify-center items-center gap-8">
                    <div>
                        <img src="/icons/logoicon.png" width={156} height={52} className="h-full w-auto aspect-square object-cover object-center" />

                    </div>
                    <div className="flex justify-between  gap-9 ">
                        <p className="text-black_light text-lg font-medium">
                            What’s GALK
                        </p>
                        <p className="text-black_light text-lg font-medium">
                            How to get Internship
                        </p>
                        <p className="text-black_light text-lg font-medium">
                            Flow to recruitment
                        </p>
                        <p className="text-black_light text-lg font-medium">
                            Comment from intern
                        </p>
                        <p className="text-black_light text-lg font-medium">
                            FAQ
                        </p>
                    </div>
                    <img src="/icons/instafooter.png" alt="" width={40} height={40} className="h-full  w-auto aspect-square object-cover object-center" />
                    <p className="text-xs font-medium text-gray-400">
                        © 2023 willings inc.
                    </p>
                </div>


            </footer>
    )
}