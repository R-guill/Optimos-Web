import { React } from "react";
import Link from "next/link";
import 'tailwindcss/tailwind.css';

const Quizselection = () => {
  return (
    <div
      
    >
      <div className="pt-6">
        <h1 className="text-green-700 text-center text-3xl font-medium my-6">
          Bienvenue sur le quiz Optimos-web
        </h1>
        <p className="text-center mt-12 mb-8">
          Vous voulez tester vos connaissances en agronomie et en apprendre plus sur le projet Optimos ? Alors vous êtes au
          bon endroit !
        </p>
        <div className="flex justify-center items-center">
          <div className="w-[500px] px-8 py-4 shadow-2xl bg-green-600 text-white flex justify-center items-center flex-col gap-6">
            <h1 className="font-extrabold text-xl">Optimos Quiz</h1>
            <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              Ce quiz a été établi dans le cadre de mon projet de développement
              d'une application mobile de conseil aux agriculteurs. Il a pour
              but de tester vos connaissances en agronomie et de mettre en
              valeur le contenu de mon projet. Bonne chance !
            </p>
            
            <div className="w-full flex justify-end pr-3">
              <button className="bg-white px-5 py-2 rounded-sm text-black hover:cursor-pointer">
                <Link href="/test">Lancer le quiz</Link>
              </button>
            </div>
          </div>
          <div className="w-[100px] px-8 py-4 "></div>
          <div className="w-[500px] px-8 py-4 shadow-2xl bg-green-600 text-white flex justify-center items-center flex-col gap-6">
            <h1 className="font-extrabold text-xl">Le Projet Optimos</h1>
            <p>
              Le projet Optimos est un projet de développement d'une application de conseil aux agriculteurs en partenariat 
              avec le LORCA et l'ENSAIA. Cette application doit permettre aux agriculteurs 
              d'améliorer la qualité de leur sol et de leurs cultures.
            </p>
            <div className="w-full flex justify-end pr-3">
              <button className="bg-white px-5 py-2 rounded-sm text-black hover:cursor-pointer">
                <Link href="/projet">Découvrir le projet</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quizselection;
