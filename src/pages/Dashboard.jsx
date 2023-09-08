import Footer from "../components/Footer";
import React from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Stepper, { Stepper2 } from "../components/Stepper";


export default function Dashboard() {

    return (
        <>
            <div className=" bg-primary-image h-[700px] ">
                {/* section  */}
                <nav className="flex text-white   w-full justify-between px-12 backdrop-blur-sm h-[181px] py-5 relative">
                    <div className="flex items-center gap-[6px] h-10 ">
                        <img src="/images/logo.png" alt="" />
                        <img src="/images/logo_2.png" alt="" />

                    </div>
                    <div className="xl:flex justify-between   gap-[50px] hidden">
                        <p className="text-white text-lg font-medium">
                            What’s GALK
                        </p>
                        <p className="text-white text-lg font-medium">
                            How to get Internship
                        </p>
                        <p className="text-white text-lg font-medium">
                            Flow to recruitment
                        </p>
                        <p className="text-white text-lg font-medium">
                            Comment from intern
                        </p>
                        <p className="text-white text-lg font-medium">
                            FAQ
                        </p>
                    </div>
                    <div className="xl:block hidden">
                        <img src="/icons/insta.png" alt="" />
                    </div>
                    <div className="lg:flex flex-col items-center justify-center -mt-14 gap-[9px] absolute top-full left-1/2 -translate-x-1/2 w-full hidden">
                        <div className="text-primary text-[42px] font-black bg-secondary px-5 ">
                            IIT students <span className="text-white text-4xl">who want to</span> intern <span className="text-white text-4xl">at a</span> Japanese company,
                        </div>
                        <div className="text-white text-4xl font-black px-5 py-1 bg-secondary ">
                            Gather round!
                        </div>
                    </div>
                </nav>


            </div>
            <div className="flex items-center justify-center ">
                <div className="flex pt-[80px]  bg-white justify-center text-center items-center flex-col gap-4 max-w-[990px] px-5">
                    <h1 className="text-[32px] font-bold text-black_light">
                        What’s GALK?
                    </h1>
                    <hr className="w-[60px]  border-1 border-white_light  " />
                    <p className="md:text-xl  text-sm font-normal text-black_light  text-center pt-6">
                        We offer a two-month summer internship program at a Japanese company
                        for job-seeking students of the Indian Institute of Technology.
                    </p>
                    <p className="md:text-xl text-sm  font-normal text-black_light max-w-[900px] w-full text-center ">
                        There is no <span className="font-bold text-[15px] md:text-xl"> need to speak Japanese </span>and Travel, accommodation, and living expenses will be covered. <br/>
                        ( Only visa application fees and travel insurance are to be paid by the student.) <br/>
                        so all you need is <span className="font-bold text-[15px] md:text-xl">  a desire to work in Japan! </span>
                    </p>
                    <div className="flex md:flex-row flex-col md:gap-3  gap-2 pt-6 ">
                        <img src="/images/db1.png" alt="" className="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] object-cover aspect-square object-center" />
                        <img src="/images/db2.png" alt="" className="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] object-cover aspect-square object-center" />
                        <img src="/images/db3.png" alt="" className="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] object-cover aspect-square object-center" />
                    </div>


                </div>
            </div>
            <div className="bg-gray-100 flex flex-col justify-center items-center relative mt-[70px] md:mt-[166px] pt-8 pb-[84px] ">
                <h1 className="xl:text-[76px] text-[26px] font-bold text-gray-100 absolute  -top-[29px] md:-top-[84px] w-full text-center z-[1]">
                    GALK SUMMER INTERNSHIP
                </h1>
                <div className="flex gap-1 items-center  max-w-[990px] px-5  w-full">
                    <h1 className="md:text-[32px] text-2xl  font-bold text-black_light">
                        How to get Internship?
                    </h1>
                    <img src="/images/plane.png" alt="" className="lg:w-[200px] lg:h-auto  w-[105px]   " />
                </div>

                <div className="flex justify-start pt-12 pl-16  max-w-[990px]  w-full  ">
                    <Stepper2 />


                </div>
                <div className="  max-w-[990px] pl-24 pt-16 md:pt-2  w-full">
                    <img src="/images/screen.png" alt="" className="w-[207px] h-[175px] object-cover object-center " />

                </div>




            </div>
            <div className="flex items-center justify-center py-[80px] bg-black_light relative">
                <div className="max-w-[990px]  w-full ">
                    <img src="/images/recruitmentprocess.png" alt="" className="w-[301px] h-[247px] object-cover object-center absolute right-[15%] -top-12  md:top-9" />

                    <div className="text-white w-full pb-10">
                        <h1 className="text-white text-[32px] font-bold px-5">
                            Flow from the start of internship to recruitment
                        </h1>
                    </div>
                    <div className="flex justify-left pl-[78px]">
                        <Stepper />
                    </div>



                    <div className="flex lg:fleex-row flex-col items-center justify-center gap-3 mt-[60px] px-5 ">
                        <img src="/images/job1.png" alt="" className="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] object-cover aspect-square object-center" />
                        <img src="/images/job2.png" alt="" className="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] object-cover aspect-square object-center" />
                        <img src="/images/job3.png" alt="" className="xl:w-[324px] md:w-[250px] w-[343px] h-[174px]  md:h-[164px] object-cover aspect-square object-center" />

                    </div>

                </div>
            </div>
            {/* <div className="flex items-center justify-center w-full">
                <div className="bg-white pt-[68px]  w-full max-w-[990px] px-5   pb-[80px]">
                    <div className="flex gap-7">
                        <p className="text-[32px] font-bold text-black_light">
                            Comment from intern
                        </p>
                        <img src="/images/engineringteam.svg" alt="" width={120} height={61} className="h-full w-auto object-cover object-center aspect-square" />
                    </div>
                    <div className="pt-10 flex flex-col gap-6">
                        {
                            students.map((student) => (
                                <StudentListItem student={student} />
                            ))
                        }

                    </div>

                </div>
            </div> */}
            {/* <div className="flex items-center justify-center w-full bg-black_light ">
                <div className="w-full max-w-[990px] px-5 pb-[72px] relative">
                    <div className="flex gap-4 items-center justify-center pt-[88px] pb-10">
                        <p className="text-[32px] font-bold text-white">
                            Please follow our Instagram!
                        </p>
                        <img src="/images/mobile.png" alt="" width={94} height={74} className="h-full w-auto object-cover object-center aspect-square" />
                    </div>
                    <div>

                    </div>
                    <div className="flex">
                        <img src="/images/insta1.png" alt="" width={250} height={252} className="h-full w-auto object-cover object-center aspect-square" />
                        <img src="/images/insta2.png" alt="" width={250} height={252} className="h-full w-auto object-cover object-center aspect-square" />
                        <img src="/images/insta3.png" alt="" width={250} height={252} className="h-full w-auto object-cover object-center aspect-square" />
                        <img src="/images/insta4.png" alt="" width={250} height={252} className="h-full w-auto object-cover object-center aspect-square" />

                    </div>
                    <div className="flex">
                        <img src="/images/insta5.png" alt="" width={250} height={252} className="h-full w-auto object-cover object-center aspect-square" />
                        <img src="/images/insta6.png" alt="" width={250} height={252} className="h-full w-auto object-cover object-center aspect-square" />
                        <img src="/images/insta7.png" alt="" width={250} height={252} className="h-full w-auto object-cover object-center aspect-square" />
                        <img src="/images/insta8.png" alt="" width={250} height={252} className="h-full w-auto object-cover object-center aspect-square" />

                    </div>
                    <div className="  flex py-8 px-16   items-center justify-center absolute left-1/2 top-[60%] -translate-y-1/2 bg-white/70 backdrop-blur-sm -translate-x-1/2 border rounded-[30px]">
                        <div className="flex flex-col items-center justify-center gap-6 w-[291px] ">
                            <img src="/images/logos_instagram.png" width={115} height={33} className="h-full w-auto object-cover object-center" />
                            <img src="/icons/logoicon.png" width={170} height={57} className="h-full w-auto object-cover object-center" />
                            <p className="text-base text-black-500 pb-2">
                                @galk_willings
                            </p>
                            <button className="flex gap-6 items-center px-6 text-lg font-medium py-2 text-white rounded-full border primary-btn">
                                Follow Us!!

                                <ChevronRightIcon />
                            </button>
                        </div>


                    </div>


                </div>
            </div> */}
            {/* <div className="flex items-center justify-center w-full bg-white  py-[80px]">
                <div className="w-full max-w-[990px] px-5  ">
                    <p className="text-[32px] font-bold text-black_light pb-[29px]">
                        FAQ
                    </p>

                    {
                        Queries.map((Query) => (
                            <QuestionsListItem Query={Query} />
                        ))
                    }


                </div>
            </div> */}

            {/* <Footer /> */}



        </>
    )



}






export function JobProcess({ heading, content, className }) {
    return (
        <div className={`flex gap-8 max-w-[990px] px-5 ${className}`}>
            <h1 className="text-base font-bold">

                {heading}
            </h1>


            <p className="text-base font-normal">
                {content}
            </p>
        </div>
    );
}




const students = [
    { name: "Aishwarya Chodavarapu ", college: "IIT GOA / Computer Science and Engineering", image: "/images/ash.png", content: "Firstly, I really liked the company, and the staff is very welcoming and takes excellent care of us. They frequently organise group lunches and ensure our comfort in the new environment.Secondly, I am highly satisfied with the project assigned to us. Through the valuable guidance of the staff, I have had the opportunity to expand my knowledge in the technical field. Working in this company has been an outstanding experience that will prove valuable in the future. Thirdly, it has always been my dream to work in Japan, and thanks to Willings support, that dream came true. The staff at Willings has been instrumental in assisting us with settling into Japan and resolving any issues we encountered. I am very grateful to Willings for their exceptional care and unwavering support in overcoming personal challenges.Lastly, I want to add that the Japanese people are renowned for their genuine care and exceptional discipline. Immersing myself in the Japanese work culture has not only shaped me as an individual but has also instilled in me a heightened sense of discipline and personal growth. The diligent work ethic and admirable values I've witnessed in Japan have inspired me to strive for excellence and become a better version of myself." },
    { name: "Harsh Agrawal ", college: "IIT GOA / Computer Science and Engineering", image: "/images/harash.png", content: "During my internship in Japan, I had an amazing experience, and I found the overall work environment to be enjoyable and fulfilling. The cultural immersion and exposure to a new environment were truly enriching. Japan's unique customs, traditions, and work culture offered a fresh perspective and created an excellent learning environment. The projects here a very intriguing and gives you a different exposure when compared to other places. The way team works and different aspects of corporate world is very smoothly operated here which is a treat to learn as a fresher. The mentors are very helpful and always interested in your ideas and approaches. There is freedom to choose your own path to solve the problem, which helps you grow more. Lastly, I want to express my gratitude for the exceptional support provided by Willings. From the moment I joined the program, they were providing constant support and help whenever required. The biweekly meetings and the feedback system is very helpful and that shows how concerned they are regarding our well being. All the amenities are well provided and are of top quality.Willings consistently went above and beyond to ensure a positive experience for all interns." },
    { name: "Aishwarya Chodavarapu ", college: "IIT Guwahait / Mechanical Engineering", image: "/images/valb.png", content: "Before coming to japan I already had a great interest in Japanese culture because of my interest in anime and manga and Japanese cars. I did my internship in Kumamoto which is somewhere at outskirts of Japan but still it is a great town. I saw my dream cars every day. Which motivates me to work more hard to get them. And people of japan are very kind and helpful. I don’t even speak Japanese but still if i try to ask for help from any stranger he do his best to help me always. And people of my company are very sweet and kind. Always there to help me. Even the people who don’t speak English try there best to learn English to speak to me. So that I don’t feel left out in Japan. Willings support is best. Willings is always there to help you in any kind of way possible. You just tell Willings what you need and they will provide that very fast. Also everyone I met from Willings is so kind and helpful and treats you like a friend. You can share anything with willings" },

]



function StudentListItem({ student }) {
    return (
        <div className="flex gap-4 w-full ">
            <img src={student.image} alt="" width={110} height={110} className="h-full w-auto object-cover object-center aspect-square rounded" />
            <div className="w-full  flex flex-col">
                <p className="text-lg font-bold text-black_light">
                    {student.name}
                </p>
                <p className="text-base font-bold text-gray-200 pt-[6px]">
                    {student.college}
                </p>
                <p className="text-sm font-normal text-black_light pt-[12px]">
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
        <div className=" w-full">
            <div className="flex gap-[10px] bg-gray-100 p-3">
                <p className="text-xl font-bold text-black_light">
                    {Query.query}
                </p>
                <p className="text-base font-medium text-black_light">
                    {Query.question}
                </p>

            </div>
            <div className="pt-4 pb-6 pl-9">
                <p className="text-base font-normal ">
                    {Query.answer}
                </p>
            </div>

        </div>


    )
}