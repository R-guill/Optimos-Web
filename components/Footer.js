import React from "react";

const Footer = () => {
    return (
        <div className="mt-2 lg:mt-2 sm:pb-2 sm:py-2 py-2">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="text-black flex flex-col justify-between lg:flex-row items-center">
                    <p>Liens vers nos partenaires : </p>
                    <div className="text-black flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://www.lorca.fr/"
                            className={"text-emerald-900 transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Lorca
                        </a>
                        <a
                            href="https://mines-nancy.univ-lorraine.fr/"
                            className={"text-emerald-900 transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            École des Mines de Nancy
                        </a>
                        <a
                            href="https://ensaia.univ-lorraine.fr/"
                            className={"text-emerald-900 transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ensaia
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;