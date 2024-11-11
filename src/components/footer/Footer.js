import githublogo from "../../assets/images/github.png"
import linkedinlogo from "../../assets/images/linkedin.png"

const Footer = () => {

    return (
        <div className="bg-gray-900" id="contact">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-gray-400">
                            Contacts
                        </p>
                        <div className="flex">
                            <p className="mr-1 text-gray-400">Phone:</p>
                            <a
                                href="tel:(+90)542-606-22-66"
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-gray-400 hover:text-gray-200"
                            >
                                (+90)542-606-22-66
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-400">Email:</p>
                            <a
                                href="mailto:batikanyeni@outlook.com"
                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-gray-400 hover:text-gray-200"
                            >
                                batikanyeni@outlook.com
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-400">Address: Sinop/Turkey</p>

                        </div>
                    </div>
                    <div>
                      <span className="text-base font-bold tracking-wide text-gray-400">
                        Social
                      </span>
                        <div className="flex items-center mt-1 space-x-3">
                            <a
                                href="https://github.com/batikanyeni"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img className="w-8 h-8" src={githublogo} alt="github logo" />
                            </a>
                            <a
                                href="http://www.linkedin.com/in/bat%C4%B1kan-yeni-174964252"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img className="w-8 h-8" src={linkedinlogo} alt="linkedin logo"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                </div>
            </div>
        </div>
    )
}

export default Footer;