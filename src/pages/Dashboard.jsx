import Footer from "../components/Footer";
import React, { useState } from "react";
import Stepper, { Stepper2 } from "../components/Stepper";
import { ChevronRightIcon, Cross1Icon } from "@radix-ui/react-icons";



function Header() {
    const [isContentOpen, setIsContentOpen] = useState(false);

    const toggleContent = () => {
        setIsContentOpen(!isContentOpen);
    };
    return (
        <>
            <header className="w-full">
                <nav className="text-white w-full backdrop-blur-sm md:h-[181px] h-[140px] pl-4 pr-3 md:px-0 py-4 md:py-5 relative">
                    <div className="w-full flex items-center justify-between gap-[126px] md:pr-14 md:pl-[57px] lg:pe-24">
                        <a className="">
                            <img src="/images/headerlogo.svg" alt="" className="w-[71px] md:w-[117px]" />
                        </a>

                        <div className="xl:flex items-start justify-between gap-[50px] hidden">
                            <a href="#galk" className="text-white text-[18px] font-normal">
                                What’s GALK
                            </a>
                            <a href="#internship" className="text-white text-[18px] font-normal">
                                How to get Internship
                            </a>
                            <a href="#recruitment" className="text-white text-[18px] font-normal">
                                Flow to recruitment
                            </a>
                            <a href="#comment"className="text-white text-[18px] font-normal">
                                Comment from intern
                            </a>
                            <a href="#faq" className="text-white text-[18px] font-normal">
                                FAQ
                            </a>
                        </div>
                        <a href="https://www.instagram.com/galk_willings/" target="_blank" className="xl:block hidden">
                            <img src="/images/Instagram_logo.svg" alt="" />
                        </a>
                        <div className="xl:hidden">
                            {/* <HamburgerMenuIcon
                                className=" font-black h-[40px] w-[50px] hover:cursor-pointer"
                                onClick={toggleContent}
                            /> */}
                            <img src="/images/menu.svg" alt="" className="w-[35px] h-auto" onClick={toggleContent} />
                        </div>
                    </div>
                    <div className="z-10 flex flex-col items-center justify-center -mt-[66px] md:-mt-14 gap-[9px] absolute top-full left-1/2 text-center -translate-x-1/2 w-full">
                        <div className="text-primary md:text-[42px] text-[22px] font-extrabold bg-secondary  px-5 xl:block leading-[140%] hidden">
                            IIT students <span className="text-white md:text-[36px] text-[18px]">who want to</span> intern <span className="text-white md:text-[36px] text-[18px]">at a</span> Japanese company,
                        </div>
                        <div className="text-primary md:text-[42px] text-[22px] font-extrabold bg-secondary  md:px-5 px-3 leading-[140%] lg:block xl:hidden">
                            IIT students <span className="text-white md:text-[36px] text-[18px]">who want to</span> intern
                        </div>
                        <div className="text-primary md:text-[42px] text-[22px] font-extrabold bg-secondary leading-[140%]  md:px-5 px-3 md:block xl:hidden">
                            <span className="text-white md:text-[36px] text-[18px]">at a</span> Japanese company,
                        </div>
                        <div className="text-white md:text-[42px] text-[22px] leading-[100%] px-3 py-[3px]  font-extrabold md:px-5 md:py-1 bg-secondary ">
                            Gather round!
                        </div>
                    </div>
                    <div className="xl:block hidden">
                        <img src="/icons/slash.png" alt="" className="w-[137px] h-[157px] absolute left-[120px] top-1/2"/>
                        <img src="/icons/slash.png" alt="" className="w-[137px] h-[157px] absolute right-[120px] top-1/2"/>
                    </div>
                </nav>
            </header>
            {isContentOpen && (
                <div className="bg-black/[0.65] z-50 min-h-[calc(100vh_+_10px)] h-screen max-h-screen overflow-y-auto fixed w-full flex justify-end  top-0 right-0">
                    <div className="w-[90%] bg-black-500 space-y-[40px] ">
                        <div className="flex justify-end pt-[25px] px-4 hover:cursor-pointer text-white">
                            <Cross1Icon onClick={toggleContent} className="w-7 h-7" />
                        </div>
                        <div className="flex gap-1 px-12">
                            <div className="flex-shrink-0">
                                <img src="/sidebar.svg" alt="" className="min-h-[730px] h-auto" />
                            </div>
                            <div className="flex flex-col pl-8">
                                <a className="text-white text-[20px] py-[24px] font-medium" href="#galk">What’s GALK</a>
                                <a className="text-white text-[20px] py-[24px] font-medium" href="#internship">How to get Internship</a>
                                <a className="text-white text-[20px] py-[24px] font-medium" href="#recruitment">Flow to recruitment</a>
                                <a className="text-white text-[20px] py-[24px] font-medium" href="#comment">Comment from intern</a>
                                <a className="text-white text-[20px] py-[24px] font-medium" href="#faq">FAQ</a>
                                <a href="https://www.instagram.com/galk_willings/" target="_blank">
                                    <img src="/images/Instagram_logo.svg" alt="" className="w-10 h-10 mt-[24px]" />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            )}
        </>
    )
}

export default function Dashboard() {

    return (
        <div>
            <div className="bg-primary-image-mobile md:bg-primary-image h-[400px] md:h-[700px]">
                <Header />
            </div>
            <section id="galk" className="flex w-full items-center justify-center pt-[40px] md:pt-[80px]">
                <div  className="flex bg-white justify-center text-center items-center flex-col gap-6 md:gap-4 w-full max-w-[1062px] px-4 md:px-5 lg:px-2">
                    <div>
                        <h1   className="text-[24px] md:text-[32px] leading-[100%] font-bold text-black_light">
                            What’s GALK?
                        </h1>
                        <hr className="w-[60px] border-[3px] border-white_light mt-4 mx-auto" />
                    </div>
                    <div>
                        <p className="md:text-[20px]  text-[14px] font-normal text-black_light max-w-[900px] w-full text-center leading-[24px] md:leading-[160%] py-0 md:mt-6">
                            <span>
                                We offer a two-month summer internship program at a Japanese company <br className="hidden md:block" />
                                for job-seeking students of the Indian Institute of Technology.
                            </span>
                            <br />
                            There is no <span className="font-bold text-[15px] md:text-[20px] "> need to speak Japanese </span>and Travel, accommodation, and living expenses will be covered. <br />
                            (Only visa application fees and travel insurance are to be paid by the student.) <br />
                            so all you need is <span className="font-bold text-[15px] md:text-[20px] ">  a desire to work in Japan! </span>
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-3 gap-2 place-items-center  md:mt-6">
                        <img src="/images/db1.png" alt="" className="lg:w-[324px] md:w-[250px] w-[343px] h-[173px]  md:h-[164px] " />
                        <img src="/images/db2.png" alt="" className="lg:w-[324px] md:w-[250px] w-[343px] h-[173px]  md:h-[164px] " />
                        <img src="/images/db3.png" alt="" className="lg:w-[324px] md:w-[250px] w-[343px] h-[173px]  md:h-[164px] " />
                    </div>
                </div>
            </section>
            <section id="internship" className="w-full flex flex-col justify-center items-center overflow-x-hidden mt-[40px] md:mt-[101px]">
                <h1 className="max-w-[1062px] md:text-[57px]  lg:text-[72px] xl:text-[76.6px] text-[26px] text-center leading-[100%] font-semibold text-gray-100 w-full z-[3] px-2 md:px-0">
                    GALK SUMMER INTERNSHIP
                </h1>
                <div className=" w-full md:px-2 pt-10 md:pt-20 bg-gray-100 pb-[40px] md:pb-[74px] -mt-[5px] md:-mt-3 lg:-mt-3 xl:-mt-3" id="internship">
                    <div className="max-w-[1062px] mx-auto">
                        <div className="flex gap-1 items-center px-4 md:pr-5 md:pl-[6px] py-0 w-fit relative">
                            <h1 className="text-[24px] md:text-[32px] md:leading-[100%] font-bold text-black_light">
                                How to get Internship?
                            </h1>
                            <img src="/images/plane.svg" alt="" className="lg:w-[200px] lg:h-auto w-[105px] absolute -right-[80px] -top-6 lg:-right-[187px] lg:-top-9" />
                        </div>
                        <div className="flex justify-start mt-5 md:mt-10 pl-16 md:pl-[63px] w-full relative">
                            <Stepper2 />
                            <img src="/images/screen.svg" alt="" className="w-[220px] h-auto absolute left-[77px] top-[60%] md:top-[50%] lg:top-[50%] md:left-[9.5%] lg:left-[7.5%] xl:top-[51%]" />
                        </div>
                        <div className="md:pl-[72px] lg:pl-[80px] pl-[77px] mt-24 md:mt-14 xl:mt-9 w-full">
                            <img src="/images/screen2.svg" alt="" className="w-[220px] h-auto" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center py-10 md:py-[80px] bg-black_light" id="recruitment">
                <div className="max-w-[1062px] w-full">
                    <div className="text-white w-full md:w-fit relative">
                        <h1 className="text-white lg:text-[32px] text-[24px] font-bold px-5 lg:pr-6 lg:pl-2">
                            Flow from the start of internship to recruitment
                        </h1>
                        <img src="/images/recruitmentprocess.svg" alt="" className="lg:w-[120px] lg:h-[98px] w-[109px] h-[102px]  absolute md:left-full right-4 -top-[100px] md:-top-36 lg:-top-10" />
                    </div>
                    <div className="flex justify-left pl-16 md:pl-[67px] lg:pl-[65px] mt-[24px] md:mt-[40px] lg:mt-[60px] pb-[20px]">
                        <Stepper />
                    </div>
                    <div className="flex md:flex-row flex-col items-center md:items-center  justify-start gap-3 mt-[24px]  md:mt-[60px] px-[11px] ">
                        <img src="/images/job1.png" alt="" className="xl:w-[324px] md:w-[250px] w-[324px] h-[164px]  md:h-[164px] object-cover aspect-square object-center" />
                        <img src="/images/job2.png" alt="" className="xl:w-[324px] md:w-[250px] w-[324px] h-[164px]  md:h-[164px] object-cover aspect-square object-center" />
                        <img src="/images/job3.png" alt="" className="xl:w-[324px] md:w-[250px] w-[324px] h-[164px]  md:h-[164px] object-cover aspect-square object-center" />
                    </div>
                </div>
            </section>
            <section id="comment" className="flex items-center justify-center w-full pt-10 md:pt-[78px]">
                <div className="bg-white w-full max-w-[1062px] px-4 md:pl-3 md:pr-4 pb-[40px] md:pb-[80px]">
                    <div className="flex md:gap-7 gap-[14px]" >
                        <p className="md:text-[32px] text-[24px]  font-bold text-black_light">
                            Comment from intern
                        </p>
                        <img src="/images/engineringteam.svg" className="md:h-[61px] md:w-[120px] w-[95px] h-[48px] -mt-2 md:-mt-3 ml-[2px] md:ml-0" />
                    </div>
                    <div className="pt-5 md:pt-3 flex flex-col gap-6">
                        {
                            students.map((student) => (
                                <StudentListItem student={student} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className="md:overflow-hidden  xl:h-[740px] md:mt-[10px] flex items-center justify-center w-full bg-black_light relative">
                <h1 className="text-[162px] font-bold text-gray-500 opacity-60 absolute -right-[300px] rotate-90 xl:block hidden">
                    Instagram
                </h1>
                <h1 className="text-[162px] font-bold text-gray-500 opacity-60 absolute -left-[300px] -rotate-90 xl:block hidden">
                    Instagram
                </h1>
                <div className="w-full max-w-[1062px] md:px-[10px] px-5 pt-[40px] md:pt-[55px] pb-[40px] md:mb-[72px] relative">
                    <div className="flex md:gap-4 items-center justify-center w-full md:ml-8">
                        <p className="text-[24px]  md:text-[32px] font-semibold text-white text-center md:text-start w-fit md:mt-2">
                            Please follow our Instagram!
                        </p>
                        <img src="/images/mobile.svg" alt="" width={94} height={74} className="w-[100px] h-auto md:block hidden" />
                        <img src="/images/mobile.svg" alt="" width={70} height={60} className="h-[60px] w-[76px] absolute -top-7 right-2   md:hidden block" />
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-3 relative mt-[18px]">
                        <img src="/images/insta01.png" alt="" className="w-full h-auto md:h-[180px] lg:h-[252px] md:w-[250px] xl:w-full" />
                        <img src="/images/insta02.png" alt="" className="w-full h-auto md:h-[180px] lg:h-[252px] md:w-[250px] xl:w-full" />
                        <img src="/images/insta03.png" alt="" className="w-full h-auto md:h-[180px] lg:h-[252px] md:w-[250px] xl:w-full" />
                        <img src="/images/insta04.png" alt="" className="w-full h-auto md:h-[180px] lg:h-[252px] md:w-[250px] xl:w-full" />
                        <img src="/images/insta05.png" alt="" className="w-full h-auto md:h-[180px] lg:h-[252px] md:w-[250px] xl:w-full" />
                        <img src="/images/insta06.png" alt="" className="w-full h-auto md:h-[180px] lg:h-[252px] md:w-[250px] xl:w-full" />
                        <img src="/images/insta07.png" alt="" className="w-full h-auto md:h-[180px] lg:h-[252px] md:w-[250px] xl:w-full" />
                        <img src="/images/insta08.png" alt="" className="w-full h-auto md:h-[180px] lg:h-[252px] md:w-[250px] xl:w-full" />
                        <img src="/images/insta9.png" alt="" className="w-full h-auto md:h-[180px] lg:h-[252px] md:w-[250px] block md:hidden" />
                        <div className="flex md:py-8 md:px-16 px-8 py-4   items-center justify-center absolute left-1/2 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm -translate-x-1/2 border rounded-[30px]">
                            <div className="flex flex-col items-center justify-center gap-3 md:gap-6 w-[180px] md:w-[291px] ">
                                <img src="/images/logos_instagram.svg" className="w-[60x] h-[17px] md:h-[33px] md:w-[115px] " />
                                <img src="/icons/logoicon.svg" width={170} height={57} className="h-[30px] w-[90px] md:h-[57px] md:w-[170px]" />
                                <p className="text-[16px] text-black-500 pb-2">
                                    @galk_willings
                                </p>
                                <a href="https://www.instagram.com/galk_willings/" target="_blank" className="h-[30px] lg:h-[57px] px-[20px] gap-[24px] flex items-center justify-center md:py-[14px] text-[10px] md:text-[18px]  relative font-normal  text-white rounded-full border primary-btn w-full">
                                    Follow Us!!
                                    <ChevronRightIcon className="w-4 h-4 absolute right-3 lg:right-6" />
                                </a>
                            </div>


                        </div>
                    </div>



                </div>
            </div>
            <div className="flex items-center justify-center w-full bg-white py-10 md:py-[80px]" id="faq">
                <div className="w-full max-w-[1062px] px-5 md:px-[9px]">
                    <div className="flex gap-2 ">
                        <p className="md:text-[32px] text-[24px]   font-bold text-black_light ">
                            FAQ
                        </p>
                        <img src="/images/faq.svg" alt="" className="w-[49px] h-[37px] -mt-[10px] block md:hidden" />
                    </div>
                    <div className="space-y-[20px] mt-[24px]">
                        {
                            Queries.map((Query) => (
                                <QuestionsListItem Query={Query} />
                            ))
                        }
                    </div>

                </div>
            </div>

            <Footer />



        </div>
    )



}











const students = [
    { name: "Aishwarya Chodavarapu ", college: "IIT GOA / Computer Science and Engineering", image: "/images/ash.svg", image1: "/images/ashm.png", content: <span className="">Firstly, I really liked the company, and the staff is very welcoming and takes excellent care of us. They frequently organise group lunches and ensure our comfort in the new environment.<br />Secondly, I am highly satisfied with the project assigned to us. Through the valuable guidance of the staff, I have had the opportunity to expand my knowledge in the technical field. Working in this company has been an outstanding experience that will prove valuable in the future.<br /> Thirdly, it has always been my dream to work in Japan, and thanks to Willings support, that dream came true. The staff at Willings has been instrumental in assisting us with settling into Japan and resolving any issues we encountered. I am very grateful to Willings for their exceptional care and unwavering support in overcoming personal challenges. <br /> Lastly, I want to add that the Japanese people are renowned for their genuine care and exceptional discipline. Immersing myself in the Japanese work culture has not only shaped me as an individual but has also instilled in me a heightened sense of discipline and personal growth. The diligent work ethic and admirable values I've witnessed in Japan have inspired me to strive for excellence and become a better version of myself.</span> },
    {
        name: "Harsh Agrawal ",
        college: "IIT Guwahait / Mechanical Engineering",
        image: "/images/intern02.png",
        image1: "/images/harashm.png",
        content: <span className="text-[14px] md:text-[16px]">During my internship in Japan, I had an amazing experience, and I found the overall work environment to be enjoyable and fulfilling. The cultural immersion and exposure to a new environment were truly enriching. Japan's unique customs, traditions, and work culture offered a fresh perspective and created an excellent learning environment. The projects here a very intriguing and gives you a different exposure when compared to other places. The way team works and different aspects of corporate world is very smoothly operated here which is a treat to learn as a fresher. The mentors are very helpful and always interested in your ideas and approaches. There is freedom to choose your own path to solve the problem, which helps you grow more. Lastly, I want to express my gratitude for the exceptional support provided by Willings. From the moment I joined the program, they were providing constant support and help whenever required. The biweekly meetings and the feedback system is very helpful and that shows how concerned they are regarding our well being. All the amenities are well provided and are of top quality.Willings consistently went above and beyond to ensure a positive experience for all interns.</span>
    },
    {
        name: "Vaibhav ",
        college: "IIT Ropar / Computer science",
        image: "/images/intern03.png",
        image1: "/images/valbm.png",
        content: <span className="text-[14px] md:text-[16px]"> Before coming to japan I already had a great interest in Japanese culture because of my interest in anime and manga and Japanese cars. I did my internship in Kumamoto which is somewhere at outskirts of Japan but still it is a great town. I saw my dream cars every day. Which motivates me to work more hard to get them. And people of japan are very kind and helpful. I don’t even speak Japanese but still if i try to ask for help from any stranger he do his best to help me always. And people of my company are very sweet and kind. Always there to help me. Even the people who don’t speak English try there best to learn English to speak to me. So that I don’t feel left out in Japan.<br /> Willings support is best. Willings is always there to help you in any kind of way possible. You just tell Willings what you need and they will provide that very fast. Also everyone I met from Willings is so kind and helpful and treats you like a friend. You can share anything with willings </span>
    },

]

// type StudentListItemProps={
//     name:String,
//     college:String,
//     content:React.ReactNode,
// 
// }


function StudentListItem({ student }) {
    return (
        <div className="flex flex-col md:flex-row md:gap-4 w-full justify-center items-center md:items-start md:justify-normal">
            <img src={student.image} alt="" width={110} height={110} className="h-auto w-[110px]  object-cover object-center aspect-square rounded md:block hidden " />
            <img src={student.image1} alt="" width={110} height={110} className="h-auto w-[110px] object-cover object-center aspect-square rounded  block md:hidden" />
            <div className="w-full  flex flex-col items-center md:items-start ">
                <p className="text-[16px] md:text-[18px]  leading-[100%] font-bold text-black_light mt-2 md:mt-0">
                    {student.name}
                </p>
                <p className="text-[14px]  md:text-[16px] leading-[100%] font-bold text-center text-gray-200  mt-[6px]">
                    {student.college}
                </p>
                <p className="text-[14px]  font-normal leading-[160%] text-black_light mt-[12px] w-full max-w-[880px]">
                    {student.content}
                </p>
            </div>
        </div>


    )
}

const Queries = [
    { query: "Q", question: "If I become an intern, how do I pay for my expenses to go to Japan?", answer: "All travel, accommodation, and living expenses will be covered. Only visa application fees and travel insurance are to be paid by the interns themselves." },
    { query: "Q", question: "Does the GALK summer internship mean working for a Japanese company called GALK?", answer: <span>No, it doesn’t. GALK is one of willings Inc’s services.<br /> GALK Summer Internship is a program in which we introduce IIT students to various Japanese companies for internships</span> },
    { query: "Q", question: "How many interviews are there?", answer: <span>There are two total.<br /> The first one is a HR interview with us ( = Willings Inc. )<br /> The second one is a technical interview with the company you may be going to for your internship.</span> },
    { query: "Q", question: "What kinds of positions are available for interns?", answer: "There are a variety of positions available depending on the company." },

]

// type QuestionsListItemProps={
//     query:String,
//     question:String,
//     answer:String,
// }

function QuestionsListItem({ Query }) {
    return (
        <div className=" w-full">
            <div className="flex items-center md:items-start gap-[10px] bg-gray-100 p-3">
                <p className="text-[20px]  font-bold text-black_light leading-[100%]">
                    {Query.query}
                </p>
                <p className="text-[16px] font-medium text-black_light mt-1 leading-[100%]">
                    {Query.question}
                </p>

            </div>
            <div className="pt-4 md:pl-9 max-w-[940px]">
                <p className="text-[15px] font-normal leading-[160%] ">
                    {Query.answer}
                </p>
            </div>

        </div>


    )
}