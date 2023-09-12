



export default function Footer() {
    return (
        <footer class="py-10 md:pt-[80px] md:pb-[83px] flex items-center justify-center bg-gray-300">
            <div class="w-full max-w-[990px] px-5 flex flex-col justify-center items-center gap-[24px] md:gap-[32px]">
                <div>
                    <img src="/icons/logoicon.png" width={156} height={52} class="h-full w-auto aspect-square object-cover object-center" />

                </div>
                <div class="flex lg:justify-between gap-[16px] md:gap-[36px]  flex-wrap justify-center">
                    <p class="text-black_light text-base md:text-lg font-medium">
                        What’s GALK
                    </p>
                    <p class="text-black_light text-base md:text-lg font-medium">
                        How to get Internship
                    </p>
                    <p class="text-black_light text-base md:text-lg font-medium">
                        Flow to recruitment
                    </p>
                    <p class="text-black_light text-base md:text-lg font-medium">
                        Comment from intern
                    </p>
                    <p class="text-black_light text-base md:text-lg font-medium">
                        FAQ
                    </p>
                </div>
                <img src="/icons/instafooter.png" alt="" width={40} height={40} class="h-full  w-auto aspect-square object-cover object-center" />
                <p class="text-xs font-medium text-gray-400">
                    © 2023 willings inc.
                </p>
            </div>


        </footer>
    )
}