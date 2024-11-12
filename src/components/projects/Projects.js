import {Pagination} from 'antd';
import {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react"
import fflogin from "../../assets/images/finflex-images/ff-login.png"
import ffexchange from "../../assets/images/finflex-images/doviz_al_sat_parite.png"
import ffcustomer from "../../assets/images/finflex-images/musteri_hesap_bilgileri.png"
import fftransactions from "../../assets/images/finflex-images/hareketler.png"
import IWMLhome from "../../assets/images/iwml-images/home.png";
import IWMLlawyers from "../../assets/images/iwml-images/lawyers-page.png";
import IWMLregister from "../../assets/images/iwml-images/register.png";
import IWMLailawyer from "../../assets/images/iwml-images/ai-lawyer-chat.png";
import SPhome from "../../assets/images/spotify-clone-images/homepage.png"
import SPsingup from "../../assets/images/spotify-clone-images/sign up.png"
import SPremium from "../../assets/images/spotify-clone-images/premium.png"
import SPhelp from "../../assets/images/spotify-clone-images/help.png"
import GHomeLogin from "../../assets/images/gamehome/login.png"
import GHome from "../../assets/images/gamehome/home.png"
import GHomeGame from "../../assets/images/gamehome/game.png"
import { Navigation } from 'swiper/modules';
import { Pagination as pgntn } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';
import {Box, Modal} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
};
const Projects = () => {
    const[projectNum, setProjectNum] = useState(1);
    const [open, setOpen] = useState(false);
    const [imgSrc,setImgSrc] = useState(null)
    const handleOpen = (src) => {
        setOpen(true);
        setImgSrc(src);
    }
    const handleClose = () => setOpen(false);
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="w-screen h-52 sm:w-4/5 sm:h-auto">
                        <img className="w-full h-full" src={imgSrc} alt="modalimg"/>
                </Box>
            </Modal>
        <div className="bg-amber-100 pt-16 rounded-t-3xl">
        <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="w-full mb-10 grid " id="projects">
                <h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
                    Projects
                </h5>
                <Pagination onChange={(page) => setProjectNum(page)} defaultCurrent={1} total={40}/>
            </div>
            {(projectNum === 1) && (
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="lg:pr-10">
                        <h5 className="mb-4 text-4xl font-extrabold leading-none">
                            <span className="inline-block text-2xl text-deep-purple-accent-400">
                              FinFlex <span className="text-gray-600 text-sm font-thin">| Spring Boot + React </span>
                            </span>
                        </h5>
                        <p className="mb-6 text-gray-900">
                            Currency exchange app that we developed as a team at Infina Academy 2024. This app was designed for employees of a financial firm.
                            The employees can log-in to the system and create accounts for their customers. They can add or withdraw money from these accounts.
                            But the main purpose of this app is to enable currency exchange between different accounts of a customer. We have used JWT tokens
                            for security, microservices for architecture and kafka for enabling communication between these services.

                        </p>
                        <hr className="mb-5 border-gray-300"/>
                        <div className="flex items-center space-x-4">
                            <a target="_blank" rel="noreferrer" className="font-serif text-blue-500 hover:text-blue-400 ease-in-out duration-300 break-words break-all" href="https://github.com/batikanyeni/finflex">https://github.com/batikanyeni/finflex</a>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        className="w-full rounded shadow-lg max-h-96 hover:cursor-pointer"
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Navigation,pgntn]}
                    >
                        <SwiperSlide><img onClick={() => handleOpen(fflogin)} className="h-full" src={fflogin} alt="login_photo"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(ffexchange)} className="h-full" src={ffexchange} alt="exhange-photo"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(fftransactions)} className="h-full" src={fftransactions}
                                          alt="transactions-photo"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(ffcustomer)} className="h-full" src={ffcustomer} alt="customer-photo"/></SwiperSlide>
                    </Swiper>
                </div>
            )}

            {(projectNum === 2) && (
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="lg:pr-10">
                        <h5 className="mb-4 text-4xl font-extrabold leading-none">
                            <span className="inline-block text-2xl text-deep-purple-accent-400">
                              IWantMyLawyer <span className="text-gray-600 text-sm font-thin">| Spring Boot + Angular </span>
                            </span>
                        </h5>
                        <p className="mb-6 text-gray-900">
                            This is my final year project. We have developed this application with a group of three. This application is meant
                            to be used by lawyers and potential clients. Lawyers can create accounts trough a 2 step account creation process.
                            For their accounts to be activated they have to provide personal and professional info like lawyerID,lawyer card photo,etc.
                            We have implemented this registration system to ensure every lawyer in the website is real. Clients can look up lawyers, see
                            their info, look at the lawyer posts. And if they prefer, they can also talk with our AI-Lawyer chatbot to get some basic info.

                        </p>
                        <hr className="mb-5 border-gray-300"/>
                        <div className="flex items-center space-x-4">
                            <a target="_blank" rel="noreferrer" className="font-serif text-blue-500 hover:text-blue-400 ease-in-out duration-300 break-words break-all" href="https://github.com/orgs/iwantmylawyerorg/repositories">https://github.com/orgs/iwantmylawyerorg/repositories</a>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        className="w-full rounded shadow-lg sm:h-96 hover:cursor-pointer"
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Navigation,pgntn]}
                    >
                        <SwiperSlide><img onClick={() => handleOpen(IWMLhome)} className="h-full" src={IWMLhome} alt="home"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(IWMLregister)} className="h-full" src={IWMLregister} alt="register"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(IWMLlawyers)} className="h-full" src={IWMLlawyers} alt="lawyers"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(IWMLailawyer)} className="h-full" src={IWMLailawyer} alt="ailawyer"/></SwiperSlide>
                    </Swiper>
                </div>
            )}

            {(projectNum === 3) && (
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="lg:pr-10">
                        <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        <span className="inline-block text-2xl text-deep-purple-accent-400">
                          Spotify Clone <span className="text-gray-600 text-sm font-thin">| React </span>
                        </span>
                        </h5>
                        <p className="mb-6 text-gray-900">
                            This project is a visual clone of Spotify website. It consists of only frontend.
                            I have developed this to challenge myself and to improve my frontend development skills.
                            Few pages of the original spotify website was recreated by me using react and vanilla css.

                        </p>
                        <hr className="mb-5 border-gray-300"/>
                        <div className="flex items-center space-x-4">
                            <a target="_blank" rel="noreferrer" className="font-serif text-blue-500 hover:text-blue-400 ease-in-out duration-300 break-words break-all" href="https://github.com/batikanyeni/spotify-visual-clone">https://github.com/batikanyeni/spotify-visual-clone</a>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        className="w-full rounded shadow-lg sm:h-96 hover:cursor-pointer"
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Navigation,pgntn]}
                    >
                        <SwiperSlide><img onClick={() => handleOpen(SPhome)} className="h-full" src={SPhome} alt="sphome"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(SPsingup)} className="h-full" src={SPsingup} alt="spregister"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(SPremium)} className="h-full" src={SPremium} alt="spremium"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(SPhelp)} className="h-full" src={SPhelp} alt="sphelp"/></SwiperSlide>
                    </Swiper>
                </div>
            )}

            {(projectNum === 4) && (
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="lg:pr-10">
                        <h5 className="mb-4 text-4xl font-extrabold leading-none">
                            <span className="inline-block text-2xl text-deep-purple-accent-400">
                              GameHome <span className="text-gray-600 text-sm font-thin">| Spring Boot + React </span>
                            </span>
                        </h5>
                        <p className="mb-6 text-gray-900">
                            This is the first big group project I have been in. You can play demos of unity games in this app.
                            And if you like the game you can purchase it. After game is bought it is added to your library. You can download
                            the game from your library. The demo of the games were run from the google cloud storage and the downloadable versions were
                            stored in my personal gmail account. We used these to avoid any cost. Unfortunately there are not many screenshots left from this
                            app and the backend code is lost to me. Yet I have decided to display it here since it has a special place in my heart.


                        </p>
                        <hr className="mb-5 border-gray-300"/>
                        <div className="flex items-center space-x-4">
                            <a target="_blank" rel="noreferrer" className="font-serif text-blue-500 hover:text-blue-400 ease-in-out duration-300 break-words break-all" href="https://github.com/batikanyeni/GameHub">https://github.com/batikanyeni/GameHub</a>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        className="w-full rounded shadow-lg sm:h-96 hover:cursor-pointer"
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Navigation,pgntn]}
                    >
                        <SwiperSlide><img onClick={() => handleOpen(GHomeLogin)} className="h-full" src={GHomeLogin} alt="GhomeLogin"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(GHome)} className="h-full" src={GHome} alt="Ghome"/></SwiperSlide>
                        <SwiperSlide><img onClick={() => handleOpen(GHomeGame)} className="h-full" src={GHomeGame} alt="GhomeGame"/></SwiperSlide>
                    </Swiper>
                </div>
            )}
        </div>
    </div>
        </React.Fragment>
    )
};
export default Projects;