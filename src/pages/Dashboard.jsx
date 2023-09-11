import Footer from "../components/Footer";
import React, { useState } from "react";
// import { ChevronRightIcon } from "@/radix-ui/react-icons";
import Stepper, { Stepper2 } from "../components/Stepper";
import { ChevronRightIcon, Cross1Icon, HamburgerMenuIcon, TextAlignJustifyIcon } from "@radix-ui/react-icons";



export default function Dashboard() {
    const [isContentOpen, setIsContentOpen] = useState(false);

    const toggleContent = () => {
        setIsContentOpen(!isContentOpen);
    };

    return (
        <div class="overflow-y-auto  max-h-full  overflow-hidden">
            <div class="bg-primary-image-mobile md:bg-primary-image h-[440px] md:h-[700px] relative">
                {/* section  */}
                <nav class="flex text-white   w-full justify-between px-5  md:px-12 backdrop-blur-sm md:h-[181px] h-[150px] py-5 relative">
                    <div class="flex items-center gap-[6px] h-10  ">
                        <img src="/images/logo.png" alt="" class="w-[23px] h-[23px] md:w-[38px] md:h-[38px] aspect-square" />
                        <img src="/images/logo_2.png" alt="" class="w-[41px] h-[17px] md:w-[68px] md:h-[29px]" />

                    </div>

                    <div class="xl:flex justify-between pt-2  gap-[50px] hidden">
                        <p class="text-white text-lg font-medium">
                            What’s GALK
                        </p>
                        <p class="text-white text-lg font-medium">
                            How to get Internship
                        </p>
                        <p class="text-white text-lg font-medium">
                            Flow to recruitment
                        </p>
                        <p class="text-white text-lg font-medium">
                            Comment from intern
                        </p>
                        <p class="text-white text-lg font-medium">
                            FAQ
                        </p>
                    </div>
                    <div class="xl:block hidden">
                        <img src="/icons/insta.png" alt="" />
                    </div>
                    <div class="xl:hidden pt-3">
                        <HamburgerMenuIcon
                            class=" font-black h-[23px] w-[35px] hover:cursor-pointer"
                            onClick={toggleContent}
                        />
                        {isContentOpen && (
                            <div class="flex z-10 flex-col min-h-screen h-[100vh] absolute gap-[50px] bg-black_light top-5 backdrop-blur-sm right-0 w-[90%]">
                                <div class="flex justify-end pt-[25px] px-4 hover:cursor-pointer">
                                    <Cross1Icon onClick={toggleContent} />
                                </div>
                                <div class="flex gap-1 px-16">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="461" viewBox="0 0 6 461" fill="none">
                                            <path d="M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333ZM3.00002 455.333C1.52726 455.333 0.333353 456.527 0.333353 458C0.333353 459.473 1.52726 460.667 3.00002 460.667C4.47278 460.667 5.66669 459.473 5.66669 458C5.66669 456.527 4.47278 455.333 3.00002 455.333ZM2.5 3L2.50002 458L3.50002 458L3.5 3L2.5 3Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div class="flex flex-col gap-[50px] pl-4 py-5">
                                        <p class="text-white text-lg font-medium">What’s GALK</p>
                                        <p class="text-white text-lg font-medium">How to get Internship</p>
                                        <p class="text-white text-lg font-medium">Flow to recruitment</p>
                                        <p class="text-white text-lg font-medium">Comment from intern</p>
                                        <p class="text-white text-lg font-medium">FAQ</p>
                                        <img src="/icons/insta.png" alt="" class="w-10 h-10" />
                                    </div>
                                </div>



                            </div>
                        )}
                    </div>

                    <div class="flex flex-col items-center justify-center -mt-[66px] md:-mt-14 gap-[9px] absolute top-full left-1/2 text-center -translate-x-1/2 w-full">
                        <div class="text-primary md:text-[42px] text-[22px] font-black bg-secondary px-5 md:block hidden">
                            IIT students <span class="text-white md:text-4xl text-[18px]">who want to</span> intern <span class="text-white md:text-4xl text-[18px]">at a</span> Japanese company,
                        </div>
                        <div class="text-primary md:text-[42px] text-[22px] font-black bg-secondary md:px-5 px-3 block md:hidden">
                            IIT students <span class="text-white md:text-4xl text-[18px]">who want to</span> intern
                        </div>
                        <div class="text-primary md:text-[42px] text-[22px] font-black bg-secondary md:px-5 px-3 block md:hidden">
                            <span class="text-white md:text-4xl text-[18px]">at a</span> Japanese company,
                        </div>
                        <div class="text-white md:text-4xl text-[22px] px-3 font-black md:px-5 md:py-1 bg-secondary ">
                            Gather round!
                        </div>
                    </div>
                </nav>


            </div>
            <div class="flex items-center justify-center ">
                <div class="flex pt-[80px]  bg-white justify-center text-center items-center flex-col gap-4 max-w-[990px] px-5">
                    <h1 class="text-[32px] font-bold text-black_light">
                        What’s GALK?
                    </h1>
                    <hr class="w-[60px]  border-1 border-white_light  " />
                    <div>
                        <p class="md:text-xl  text-sm font-normal text-black_light  text-center pt-6">
                            We offer a two-month summer internship program at a Japanese company <br />
                            for job-seeking students of the Indian Institute of Technology.
                        </p>
                        <p class="md:text-xl text-sm  font-normal text-black_light max-w-[900px] w-full text-center ">
                            There is no <span class="font-bold text-[15px] md:text-xl"> need to speak Japanese </span>and Travel, accommodation, and living expenses will be covered. <br />
                            (Only visa application fees and travel insurance are to be paid by the student.) <br />
                            so all you need is <span class="font-bold text-[15px] md:text-xl">  a desire to work in Japan! </span>
                        </p>
                    </div>

                    <div class="flex md:flex-row flex-col md:gap-3  gap-2 pt-6 ">
                        <img src="/images/db1.png" alt="" class="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] " />
                        <img src="/images/db2.png" alt="" class="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] " />
                        <img src="/images/db3.png" alt="" class="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] " />
                    </div>


                </div>
            </div>
            <div class="bg-gray-100 flex flex-col justify-center items-center relative mt-[70px] md:mt-[166px] pt-8 pb-[84px] ">
                <h1 class="xl:text-[76px] text-[26px] font-bold text-gray-100 absolute  -top-[29px] md:-top-[84px] w-full text-center z-[1]">
                    GALK SUMMER INTERNSHIP
                </h1>
                <div class="flex gap-1 items-center  max-w-[990px] px-5  w-full">
                    <h1 class="md:text-[32px] text-xl  font-bold text-black_light">
                        How to get Internship?
                    </h1>
                    <img src="/images/plane.png" alt="" class="lg:w-[200px] lg:h-auto w-[105px] -mt-10 md:-mt-0" />
                </div>

                <div class="flex justify-start pt-12 pl-16 max-w-[990px] w-full relative">
                    <Stepper2 />
                    <img src="/images/screen.png" alt="" class="w-[207px] h-[175px] absolute left-[20%] top-[57%] md:top-[53%] lg:top-[54%] md:left-[9%]" />
                </div>
                <div class="max-w-[990px] md:pl-[88px] pl-20 pt-14 md:pt-2 lg:pt-6 w-full">
                    <img src="/images/screen.png" alt="" class="w-[207px] h-[175px]" />
                </div>
            </div>
            <div class="flex items-center justify-center py-10 md:py-[80px] bg-black_light relative">
                <div class="max-w-[990px]  w-full ">
                    <img src="/images/recruitmentprocess.svg" alt="" class="lg:w-[301px] lg:h-[247px] w-[109px] h-[102px]  absolute md:right-[3%] xl:right-[10%] right-4 -top-14  lg:top-9" />
                    <div class="text-white w-full pb-6 md:pb-12">
                        <h1 class="text-white lg:text-[32px] text-2xl font-bold px-5">
                            Flow from the start of internship to recruitment
                        </h1>
                    </div>
                    <div class="flex justify-left pb-12 pl-16 md:pl-[78px]">
                        <Stepper />
                    </div>
                    <div class="flex md:flex-row flex-col items-center justify-center gap-3  md:mt-[60px] px-5 ">
                        <img src="/images/job1.png" alt="" class="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] object-cover aspect-square object-center" />
                        <img src="/images/job2.png" alt="" class="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] object-cover aspect-square object-center" />
                        <img src="/images/job3.png" alt="" class="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] object-cover aspect-square object-center" />
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center w-full">
                <div class="bg-white pt-[68px]  w-full max-w-[990px] px-5   pb-[80px]">
                    <div class="flex md:gap-7 gap-4">
                        <p class="md:text-[32px] text-2xl font-bold text-black_light">
                            Comment from intern
                        </p>
                        <img src="/images/engineringteam.svg" class="md:h-[61px] md:w-[120px] w-[95px] h-[48px] -mt-3" />
                    </div>
                    <div class="pt-6 md:pt-10 flex flex-col gap-6">
                        {
                            students.map((student) => (
                                <StudentListItem student={student} />
                            ))
                        }

                    </div>

                </div>
            </div>
            <div class="flex items-center justify-center w-full bg-black_light  relative">
                <h1 className="text-[162px] font-bold text-gray-500 opacity-60 absolute -right-[300px] rotate-90 xl:block hidden">
                    Instagram
                </h1>
                <h1 className="text-[162px] font-bold text-gray-500 opacity-60 absolute -left-[300px] -rotate-90 xl:block hidden">
                    Instagram
                </h1>
                <div class="w-full max-w-[990px] px-5 pb-10 md:pb-[72px] relative">

                    <div class="flex md:gap-4 items-center justify-center pb-6 pt-10 md:pt-[88px] md:pb-10 w-full">
                        <p class="text-2xl  md:text-[32px] font-bold text-white text-center md:text-start w-full">
                            Please follow our Instagram!
                        </p>
                        <img src="/images/mobile.png" alt="" width={94} height={74} class="h-[74px]  w-[94px] md:block hidden" />
                        <img src="/images/mobile.png" alt="" width={70} height={60} class="h-[60px]  w-[76px] absolute -top-7 right-13 md:hidden block" />
                    </div>
                    <div>

                    </div>
                    <div class="grid md:grid-cols-4 grid-cols-3 relative">
                        <img src="/images/insta1.png" alt="" class="w-full h-[115px] md:h-[252px] md:w-[250px]" />
                        <img src="/images/insta2.png" alt="" class="w-full h-[115px] md:h-[252px] md:w-[250px]" />
                        <img src="/images/insta3.png" alt="" class="w-full h-[115px] md:h-[252px] md:w-[250px]" />
                        <img src="/images/insta4.png" alt="" class="w-full h-[115px] md:h-[252px] md:w-[250px]" />
                        <img src="/images/insta5.png" alt="" class="w-full h-[115px] md:h-[252px] md:w-[250px]" />
                        <img src="/images/insta6.png" alt="" class="w-full h-[115px] md:h-[252px] md:w-[250px]" />
                        <img src="/images/insta7.png" alt="" class="w-full h-[115px] md:h-[252px] md:w-[250px]" />
                        <img src="/images/insta8.png" alt="" class="w-full h-[115px] md:h-[252px] md:w-[250px]" />
                        <img src="/images/insta9.png" alt="" class="w-full h-[115px] md:h-[252px] md:w-[250px] block md:hidden" />
                        <div class="flex md:py-8 md:px-16 px-8 py-4   items-center justify-center absolute left-1/2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm -translate-x-1/2 border rounded-[30px]">
                            <div class="flex flex-col items-center justify-center gap-3 md:gap-6 w-[180px] md:w-[291px] ">
                                <img src="/images/logos_instagram.png" class="w-[60x] h-[17px] md:h-[33px] md:w-[115px] " />
                                <img src="/icons/logoicon.png" width={170} height={57} class="h-[30px] w-[90px] md:h-[57px] md:w-[170px]" />
                                <p class="text-base text-black-500 pb-2">
                                    @galk_willings
                                </p>
                                <button class="flex pr-3 py-2 pl-8 md:gap-10 gap-6  items-center md:py-[14px] md:pl-20 md:pr-6 text-[10px] md:text-lg font-medium  text-white rounded-full border primary-btn">
                                    Follow Us!!

                                    <ChevronRightIcon />
                                </button>
                            </div>


                        </div>
                    </div>



                </div>
            </div>
            <div class="flex items-center justify-center w-full bg-white py-10 md:py-[80px]">
                <div class="w-full max-w-[990px] px-5  ">
                    <div class="flex gap-2">
                        <p class="md:text-[32px] text-2xl  font-bold text-black_light pb-[29px]">
                            FAQ
                        </p>
                        <img src="/images/faq.png" alt="" class="w-[49px] h-[37px] -mt-[10px] block md:hidden" />
                    </div>


                    {
                        Queries.map((Query) => (
                            <QuestionsListItem Query={Query} />
                        ))
                    }


                </div>
            </div>

            <Footer />



        </div>
    )



}











const students = [
    { name: "Aishwarya Chodavarapu ", college: "IIT GOA / Computer Science and Engineering", image: "/images/ash.png", content:<>Firstly, I really liked the company, and the staff is very welcoming and takes excellent care of us. They frequently organise group lunches and ensure our comfort in the new environment.<br/>Secondly, I am highly satisfied with the project assigned to us. Through the valuable guidance of the staff, I have had the opportunity to expand my knowledge in the technical field. Working in this company has been an outstanding experience that will prove valuable in the future.<br/> Thirdly, it has always been my dream to work in Japan, and thanks to Willings support, that dream came true. The staff at Willings has been instrumental in assisting us with settling into Japan and resolving any issues we encountered. I am very grateful to Willings for their exceptional care and unwavering support in overcoming personal challenges.Lastly, I want to add that the Japanese people are renowned for their genuine care and exceptional discipline. Immersing myself in the Japanese work culture has not only shaped me as an individual but has also instilled in me a heightened sense of discipline and personal growth. The diligent work ethic and admirable values I've witnessed in Japan have inspired me to strive for excellence and become a better version of myself.</> },
    { name: "Harsh Agrawal ", college: "IIT GOA / Computer Science and Engineering", image: "/images/harash.png", content: "During my internship in Japan, I had an amazing experience, and I found the overall work environment to be enjoyable and fulfilling. The cultural immersion and exposure to a new environment were truly enriching. Japan's unique customs, traditions, and work culture offered a fresh perspective and created an excellent learning environment. The projects here a very intriguing and gives you a different exposure when compared to other places. The way team works and different aspects of corporate world is very smoothly operated here which is a treat to learn as a fresher. The mentors are very helpful and always interested in your ideas and approaches. There is freedom to choose your own path to solve the problem, which helps you grow more. Lastly, I want to express my gratitude for the exceptional support provided by Willings. From the moment I joined the program, they were providing constant support and help whenever required. The biweekly meetings and the feedback system is very helpful and that shows how concerned they are regarding our well being. All the amenities are well provided and are of top quality.Willings consistently went above and beyond to ensure a positive experience for all interns." },
    { name: "Aishwarya Chodavarapu ", college: "IIT Guwahait / Mechanical Engineering", image: "/images/valb.png", content:<> Before coming to japan I already had a great interest in Japanese culture because of my interest in anime and manga and Japanese cars. I did my internship in Kumamoto which is somewhere at outskirts of Japan but still it is a great town. I saw my dream cars every day. Which motivates me to work more hard to get them. And people of japan are very kind and helpful. I don’t even speak Japanese but still if i try to ask for help from any stranger he do his best to help me always. And people of my company are very sweet and kind. Always there to help me. Even the people who don’t speak English try there best to learn English to speak to me. So that I don’t feel left out in Japan.<br/> Willings support is best. Willings is always there to help you in any kind of way possible. You just tell Willings what you need and they will provide that very fast. Also everyone I met from Willings is so kind and helpful and treats you like a friend. You can share anything with willings </>},

]



function StudentListItem({ student }) {
    return (
        <div class="flex flex-col md:flex-row md:gap-4 w-full justify-center items-center md:items-start md:justify-normal">
            <img src={student.image} alt="" width={110} height={110} class="h-[110px] w-[110px] object-cover object-center aspect-square rounded" />
            <div class="w-full  flex flex-col items-center md:items-start">
                <p class="text-base md:text-lg font-bold text-black_light">
                    {student.name}
                </p>
                <p class="text-sm md:text-base font-bold text-center text-gray-200  md:pt-[6px]">
                    {student.college}
                </p>
                <p class="text-sm font-normal text-black_light pt-[12px] ">
                    {student.content}

                </p>
            </div>
        </div>


    )
}

const Queries = [
    { query: "Q", question: "If I become an intern, how do I pay for my expenses to go to Japan?", answer: "All travel, accommodation, and living expenses will be covered. Only visa application fees and travel insurance are to be paid by the interns themselves." },
    { query: "Q", question: "Does the GALK summer internship mean working for a Japanese company called GALK?", answer: "No, it doesn’t. GALK is one of willings Inc’s services. GALK Summer Internship is a program in which we introduce IIT students to various Japanese companies for internships" },
    { query: "Q", question: "How many interviews are there?", answer: "There are two total. The first one is a HR interview with us ( = Willings Inc. ) The second one is a technical interview with the company you may be going to for your internship." },

]



function QuestionsListItem({ Query }) {
    return (
        <div class=" w-full">
            <div class="flex gap-[10px] bg-gray-100 p-3">
                <p class="text-xl font-bold text-black_light">
                    {Query.query}
                </p>
                <p class="text-base font-medium text-black_light">
                    {Query.question}
                </p>

            </div>
            <div class="pt-4 pb-6  md:pl-9">
                <p class="text-[15px] font-normal ">
                    {Query.answer}
                </p>
            </div>

        </div>


    )
}