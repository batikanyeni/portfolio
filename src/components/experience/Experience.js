

const Experience = () => {

    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" id="experience">
            <h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
                Experience
            </h5>
            <div className="mb-10 border-t border-b divide-y">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                Software Developer Internship
                            </p>
                            <p className="text-gray-600">Jul 2024 - Aug 2024</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <p
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <span className="text-2xl font-extrabold leading-none xl:text-3xl">
                                    Infina Yazılım A.Ş
                                </span>
                            </p>
                        </div>
                        <p className="text-gray-700">
                            I took place in Infina Akademi 2024 as a software developer intern.
                            Worked with my team to develop a currency exchange app using spring-boot and react. This
                            project brought us first
                            place in İnfina Akademi 2024.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <p
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                Embedded Systems Internship
                            </p>
                            <p className="text-gray-600">Jul 2023 - Aug 2023</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <p
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <span className="text-2xl font-extrabold leading-none xl:text-3xl">
                                    Rovelver Vip Auto Design
                                </span>
                            </p>
                        </div>
                        <p className="text-gray-700">
                            Worked on developing embedded software for testing units using C language and Stm32
                            development board.
                            Developed a vehicle record tracking desktop app using python,tkinter and mysql.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;