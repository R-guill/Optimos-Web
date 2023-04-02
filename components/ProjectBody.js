import React from "react";
import Link from "next/link";

const Body = () => {
  return (
    <div>
      <div className="pt-6">
        <h1 className="text-green-700 text-center text-3xl font-medium my-6">
          Bienvenue sur la description du Projet Optimos
        </h1>

        <div className="flex justify-center items-center">
          <div className="w-[800px] px-8 py-4 shadow-2xl bg-green-600 text-white flex justify-center items-center flex-col gap-8">
            <h1 className="font-extrabold text-xl">Le projet Optimos</h1>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "justify",
              }}
            >
              Le projet Optimos est un projet de développement d'une application
              de conseil aux agriculteurs. Elle est réalisée pour la coopérative
              du Lorca en partenariat avec les Mines de Nancy et l'Ensaia. Le
              projet a débuté à l'Ensaia qui a utilisé des outils d'analyse de
              données pour établir des groupes d'agriculteurs ayant des
              caractéristiques similaires. Ces groupes ont ensuite été analysés
              par les étudiants pour affecter des conseils à chaque groupe en
              fonction de leur groupes et de certaines caractéristiques
              supplémentaires comme la quatntité d'apports organiques. Le projet
              a ensuite été repris par les Mines de Nancy qui ont développé une
              application pour permettre aux agriculteurs de consulter les
              conseils. Mon rôle dans ce projet est de développer la partie qui
              génère les conseils en fonction des données de l'agriculteur et de
              déployer l'application. Pour cela j'ai dû comprendre en détail
              l'analyse des groupes faite par les étudiants de l'Ensaia et les
              conseils qui ont été établis. J'ai ensuite développé un algorithme
              qui permet de générer les conseils en fonction des données de
              l'agriculteur. Actuellement, je suis en train de m'occuper de la
              fonction de login et du déploiement de l'application sur le store
              de google. J'ai aussi été rejoint par deux étudiants de première
              année pour travailler sur le projet, principalement pour la partie
              front-end.
            </p>
            <div class="flex flex-row">
            <figure class="max-w-lg ">
              <img
                class="h-auto max-w-full rounded-lg"
                src="/login.jpg"
                alt="Page de login de l'application"
              />
              
              <figcaption class="mt-2 text-lg text-left text-gray-500 dark:text-black">
                Page de login de l'application
              </figcaption>
            </figure>
            <div class="text-transparent"> aaaaaa      </div>
            <figure class="max-w-lg">
              <img
                class="h-auto max-w-full rounded-lg"
                src="/home.jpg"
                alt="Page d'acceuil de l'application"
              />
              <figcaption class="mt-2 text-lg text-left text-gray-500 dark:text-black">
                Page d'acceuil de l'application
              </figcaption>
              
            </figure>
            </div>
            <div class="flex flex-row items-center">
            
            <figure class="max-w-lg">
              <img
                class="h-auto max-w-full rounded-lg"
                src="/param.jpg"
                alt="params simulation"
              />
              <figcaption class="mt-2 text-lg text-left text-gray-500 dark:text-black">
                Page du choix des paramètres de simulation
              </figcaption>
            </figure>
            <div class="text-transparent"> aaaaaa      </div>
            <figure class="max-w-lg">
              <img
                class="h-auto max-w-full rounded-lg"
                src="/conseil.jpg"
                alt="Page de login de l'application"
              />
              <figcaption class="mt-2 text-lg text-left text-stone-950 dark:text-black">
                Conseils obtenus en fonction des paramètres de simulation
              </figcaption>
            </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
