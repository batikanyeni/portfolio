import uniphoto from "../../assets/images/estü.jpg"
import polanduni from "../../assets/images/polanduni.jpg"
const Education = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
             id="education">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        Education
                        <br className="hidden md:block"/>
                        <span className="inline-block text-2xl text-deep-purple-accent-400">
                          Eskişehir Technical University
                        </span>
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Originally my university education started in Mugla Sıtkı Koçman University Computer Engineering
                        department. But I decided to
                        continue my education in a different city at my 3rd year. So I applied to Eskişehir Technical
                        University and got accepted.
                        I have completed the rest of my education here.

                    </p>
                    <hr className="mb-5 border-gray-300"/>
                    <div className="flex items-center space-x-4">
                        <p className="text-gray-900">2019-2024</p>
                        <p className="text-gray-900">3.2 GPA</p>
                        <p className="text-gray-900">Bachelor Degree</p>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={uniphoto}
                        alt="estü_photo"
                    />
                </div>
            </div>
            <div className="grid gap-10 lg:grid-cols-2 mt-12">
                <div className="lg:pr-10">
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        <br className="hidden md:block"/>
                        <span className="inline-block text-2xl text-deep-purple-accent-400">
                          West Pomeranian University of Technology
                        </span>
                    </h5>
                    <p className="mb-6 text-gray-900">
                        At second year of university I applied to erasmus program and got accepted by this school at Poland.
                        I was in the computer science department for one semester. Thanks to this experience I met lots of students
                        from different backgrounds and cultures.
                    </p>
                    <hr className="mb-5 border-gray-300"/>
                    <div className="flex items-center space-x-4">
                        <p className="text-gray-900">2021 - Erasmus</p>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={polanduni}
                        alt="polanduni_photo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Education;