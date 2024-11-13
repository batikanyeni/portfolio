import profileimg from "../../assets/images/profile-pic.jpg";
import {useState} from "react";

const AboutMe = () => {

    const[expanded, setExpanded] = useState(false);
    const[textView,setTextView] = useState("block");
    const[rotation,setRotation] = useState("");

    const handleExpandClick = () => {
        if (!expanded) {
            setTextView("hidden");
            setRotation("rotate-180");
            setExpanded(true);
        }
        else{
            setTextView("block");
            setRotation("");
            setExpanded(false);
        }
    }

    return (
        <div className="relative bg-gray-900" id="about-me">
            <div className="absolute inset-x-0 bottom-0">
                <svg
                    viewBox="0 0 224 12"
                    fill="currentColor"
                    className="w-full -mb-1 text-white"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"/>
                </svg>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center">
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                        Welcome to my portfolio!
                    </h2>
                    <div className="flex justify-center mb-6">
                        <img src={profileimg} alt="profile-pic" className="w-64 h-64 rounded-full overflow-hidden object-cover object-[0_25%]" />
                    </div>
                    <p className="mb-6 text-center text-base font-thin tracking-wide text-gray-300 md:text-lg">
                        Hello! I'm Batıkan Yeni. I am a fresh graduate from Eskişehir Technical University Computer Enginnering Department and I specialize in fullstack web development.
                    </p>
                    <div className={"grid items-center justify-center"}>
                        <p className={`text-center text-base font-thin tracking-wide text-gray-300 md:text-lg mb-3 overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "block max-h-96 opacity-100 mb-3" : "max-h-0 opacity-0"} `}>
                            During my education I mostly had experience with Java and Javascript. I have participated in team and personal projects using web development technologies like
                            Spring-Boot,React and Angular. I have learned how to apply Design patterns and create object orianted apps. In my second year
                            in University I went to Poland with Erasmus project and met with many people from different backgrounds and cultures. Focusing on
                            the work I have and pushing trough until it is finished has become my strong suit. Now I am finished with my education and I want to
                            get working with real world applications. You can reach me by info at the contact section.
                        </p>
                        <p className={`${textView} max-w-md text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto mb-4`}>
                            Expand To Read More
                        </p>
                        <button
                            aria-label="Scroll down"
                            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
                            onClick={handleExpandClick}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="currentColor"
                                className={`${rotation}`}
                            >
                                <path
                                    d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutMe;