



export default function Footer() {
    return (
        <footer className="py-10 md:pt-[80px] md:pb-[83px] flex items-center justify-center bg-gray-300">
            <div className="w-full max-w-[1002px] px-5 flex flex-col justify-center items-center gap-[24px] md:gap-[32px]">
                <a>
                    <img src="/images/logoicon.svg" width={156} height={52} className="h-auto w-[156px]  object-cover object-center" />
                </a>
                <div className="flex lg:justify-between gap-[16px] md:gap-[36px]  flex-wrap justify-center">
                    <a  className="text-black_light text-[16px] md:text-[18px] font-medium cursor-pointer" href="#galk">
                        What’s GALK
                    </a>
                    <a className="text-black_light text-[16px] md:text-[18px] font-medium cursor-pointer" href="#internship">
                        How to get Internship
                    </a>
                    <a className="text-black_light text-[16px] md:text-[18px] font-medium cursor-pointer" href="#recruitment">
                        Flow to recruitment
                    </a>
                    <a className="text-black_light text-[16px] md:text-[18px] font-medium cursor-pointer" href="#comment">
                        Comment from intern
                    </a>
                    <a className="text-black_light text-[16px] md:text-[18px] font-medium cursor-pointer" href="#faq">
                        FAQ
                    </a>
                </div>
                <a href="https://www.instagram.com/galk_willings/" target="_blank">
                    <img src="/images/instafooter.svg" alt="" width={40} height={40} className="h-full  w-auto aspect-square object-cover object-center" />
                </a>
                <a className="text-[12px] font-medium text-gray-400">
                    © 2023 willings inc.
                </a>
            </div>


        </footer>
    )
}