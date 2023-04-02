import { React, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

const Index = () => {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [questionLength, setQuestionLength] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);
  const read_token = process.env.REACT_APP_READ_TOKEN;
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          `https://api.buttercms.com/v2/content/my_quiz_app/?auth_token=f60c20d10072f2aff56ae6d0af00931ca8fa8dea`
        )
        .then((res) => {
          console.log(res);
          setQuizQuestions(res.data.data.my_quiz_app);
          setQuestionLength(res.data.data.my_quiz_app.length);
        });
    };
    fetchData();
  }, []);

  const handleChoice = (choice) => {
    if (
      choice === quizQuestions[questionNumber]?.correct_option &&
      !isQuestionAnswered
    ) {
      setIsQuestionAnswered(true);
      setTotalScore(totalScore + 1);
      alert("Bonne réponse !");
    } else if (
      choice !== quizQuestions[questionNumber]?.correct_option &&
      !isQuestionAnswered
    ) {
      setIsQuestionAnswered(true);
      alert("Mauvaise réponse");
    } else {
      alert("Vous avez déjà répondu à cette question");
    }
  };
  return (
    <div>
      <Head>
        <title>Optimos Web</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/1188/1188086.png"/>
      </Head>
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-t from-yellow-700 ">
      {!quizEnded ? (
        <div className="w-4/5 h-3/4 shadow-2xl flex flex-col justify-center items-center font-medium gap-16 bg-gradient-to-t from-yellow-700 ">
          <h1 className="text-2xl text-center">
            {quizQuestions[questionNumber]?.quiz_question}?
          </h1>
          <div className=" grid grid-cols-2 gap-8 gap-x-12 ">
            {/* options */}
            <div
              className=" w-[400px] rounded-md flex justify-center items-center py-4 text-black bg-green-700 hover:cursor-pointer hover:bg-green-600"
              onClick={() =>
                handleChoice(quizQuestions[questionNumber]?.option_one)
              }
            >
              {quizQuestions[questionNumber]?.option_one}
            </div>
            <div
              className=" w-[400px] rounded-md flex justify-center items-center py-4 text-black bg-green-700 hover:cursor-pointer hover:bg-green-600"
              onClick={() =>
                handleChoice(quizQuestions[questionNumber]?.option_two)
              }
            >
              {quizQuestions[questionNumber]?.option_two}
            </div>
            <div
              className=" w-[400px] rounded-md flex justify-center items-center py-4 text-black bg-green-700 hover:cursor-pointer hover:bg-green-600"
              onClick={() =>
                handleChoice(quizQuestions[questionNumber]?.option_three)
              }
            >
              {quizQuestions[questionNumber]?.option_three}
            </div>
            <div
              className=" w-[400px] rounded-md flex  justify-center items-center py-4 text-black bg-green-700 hover:cursor-pointer hover:bg-green-600"
              onClick={() =>
                handleChoice(quizQuestions[questionNumber]?.option_4)
              }
            >
              {quizQuestions[questionNumber]?.option_4}
            </div>
          </div>
          {isQuestionAnswered ? (
  <button
    className=" rounded-full bg-gray-900 px-3 py-2 w-max text-white "
    onClick={() => {
      if (questionNumber + 1 === questionLength) {
        setQuizEnded(true);
      }
      else{
      setQuestionNumber(questionNumber + 1);
      }
      setIsQuestionAnswered(false);
    }}
  >
    Question suivante
  </button>
) : null}
          {isQuestionAnswered ? (
            <div className=" w-full px-2 ">
              <p className="text-base max-h-[100px] text-justify mb-3 px-3 py-2 overflow-y-scroll ">
                {/* correct answer explanation here */}
                {quizQuestions[questionNumber]?.explanation}
              </p>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="w-4/5 min-h-[75%] shadow-2xl flex flex-col justify-center items-center font-medium gap-16 ">
          <h1>Bravo vous êtes arrivés à la fin du quiz!</h1>
          <h1 className="text-2xl">
            Votre score est de {totalScore} sur {questionLength}
          </h1>
          <button
            className=" bg-gray-900 px-3 py-2 w-max text-white "
            onClick={() => {
              setQuestionNumber(0);
              setQuizEnded(false);
              setTotalScore(0);
            }}
          >
            Recommencer le quiz
          </button>
          <Link href="/">Retourner à l'accueil</Link>
        </div>
      )}
      
    </div>
    
    </div>
  );
};
export default Index;
