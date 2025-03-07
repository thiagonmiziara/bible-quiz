"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  Trophy,
  BookOpen,
  User,
} from "lucide-react";
import Image from "next/image";

type QuizData = {
  question_id: number;
  question: string;
  options: string[];
  correct_answer: string;
  difficulty: string;
  context: string;
};

export default function QuizPage() {
  const { data: session } = useSession();
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  console.log("🚀 ~ QuizPage ~ answeredQuestions:", answeredQuestions);

  const [showFeedback, setShowFeedback] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const maxScore = 1000;

  useEffect(() => {
    fetchQuiz();
  }, []);

  useEffect(() => {
    if (maxScore > 0) {
      setProgressPercentage((score / maxScore) * 100);
    } else {
      setProgressPercentage(0);
    }
  }, [score, maxScore]);

  useEffect(() => {
    if (correct !== null && timeLeft > 0) {
      // Alterado para verificar se correct está definido
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setTimeLeft(10);
            fetchQuiz();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [correct, timeLeft]);

  async function fetchQuiz() {
    setLoading(true);
    setSelected(null);
    setCorrect(null);
    setShowFeedback(false);
    setTimeLeft(10);

    try {
      const response = await fetch("/api/quiz");
      if (!response.ok) {
        throw new Error("Error fetching quiz");
      }
      const data = await response.json();
      setQuiz(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar quiz:", error);
    }
  }

  function handleAnswer(option: string) {
    setSelected(option);
    const isCorrect = option === quiz?.correct_answer;
    setCorrect(isCorrect);
    setShowFeedback(true);

    if (isCorrect) {
      setScore((prev) => prev + 100);
    }

    if (quiz?.question_id !== undefined) {
      setAnsweredQuestions((prev) => [...prev, quiz.question_id]);
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-950 to-violet-950 text-white'>
      <div className='w-full max-w-3xl'>
        <div className='flex justify-between items-center w-full mb-6'>
          <Link href='/'>
            <Button
              variant='ghost'
              className='flex items-center text-violet-200 hover:text-violet-100 hover:bg-violet-900/30 px-4 py-2 rounded-full'
            >
              <ChevronLeft size={20} className='mr-2' />
              Voltar
            </Button>
          </Link>
          <div className='flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-full'>
            <Image
              src={session?.user?.image as string}
              alt='Avatar do usuário logado!'
              width={20}
              height={20}
              className='rounded-full'
            />
            <span className='text-violet-200'>{session?.user?.name}</span>
            <div className='w-px h-6 bg-gray-700 mx-2'></div>
            <Trophy size={18} className='text-yellow-400' />
            <span className='font-bold text-yellow-300'>{score} pontos</span>
          </div>
        </div>

        <div className='mb-6'>
          <div className='flex justify-between items-center mb-2 text-sm'>
            <span className='text-violet-200'>Progresso</span>
            <span className='font-medium text-violet-200'>
              {score} / {maxScore}
            </span>
          </div>
          <div className='w-full bg-gray-800 h-3 rounded-full relative overflow-hidden'>
            <div
              className='h-full bg-gradient-to-r from-violet-500 to-violet-300 transition-all duration-500'
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {loading ? (
          <div className='flex flex-col items-center justify-center py-12'>
            <Loader2 className='animate-spin text-violet-400 mb-4' size={40} />
            <p className='text-violet-200'>Carregando próxima pergunta...</p>
          </div>
        ) : quiz ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className='w-full bg-gray-800/80 border-0 backdrop-blur-sm shadow-xl overflow-hidden'>
              <CardHeader className='bg-gradient-to-r from-violet-800 to-violet-700 p-4'>
                <CardTitle className='flex items-center justify-center gap-2 text-2xl font-bold text-white'>
                  <BookOpen className='h-6 w-6' />
                  Quiz Bíblico
                </CardTitle>
              </CardHeader>
              <CardContent className='p-6'>
                <div className={"mb-2 w-full"}>
                  <motion.p
                    style={{
                      fontSize: "1.3rem",
                      textAlign: "center",
                      fontWeight: "medium",
                      color: "white",
                      marginBottom: "2rem",
                      lineHeight: "1.5rem",
                      width: "100%",
                      margin: "0 auto",
                    }}
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {quiz.question}
                  </motion.p>
                </div>
                <div className='grid gap-4'>
                  {quiz.options.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <Button
                        onClick={() => !selected && handleAnswer(option)}
                        disabled={selected !== null}
                        variant='outline'
                        className={`w-full h-full py-4 px-6 text-left justify-start text-base font-medium border-2
        ${
          selected === option
            ? correct
              ? "border-green-500 bg-green-500/20 text-white"
              : "border-red-500 bg-red-500/20 text-white"
            : "border-violet-600/50 bg-gray-800/50 text-violet-100 hover:bg-violet-800/30 hover:border-violet-500"
        }
       whitespace-pre-wrap
      `}
                      >
                        <p className='break-words'>{option}</p>

                        {selected === option &&
                          (correct ? (
                            <CheckCircle2 className='ml-auto text-green-400 h-5 w-5 mt-1' />
                          ) : (
                            <XCircle className='ml-auto text-red-400 h-5 w-5 mt-1' />
                          ))}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      marginTop: "1rem",
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      backgroundColor: correct
                        ? "rgba(34, 197, 94, 0.1)"
                        : "rgba(239, 68, 68, 0.1)",
                      border: correct
                        ? "1px solid rgba(34, 197, 94, 0.3)"
                        : "1px solid rgba(239, 68, 68, 0.3)",
                    }}
                  >
                    <div className='flex items-start gap-3'>
                      {correct ? (
                        <CheckCircle2 className='text-green-400 h-6 w-6 mt-1 flex-shrink-0' />
                      ) : (
                        <XCircle className='text-red-400 h-6 w-6 mt-1 flex-shrink-0' />
                      )}
                      <div className='flex-1'>
                        <h3
                          className={`font-bold text-lg ${
                            correct ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {correct ? "Resposta correta!" : "Resposta incorreta"}
                        </h3>
                        <p className='text-gray-200 mt-1'>{quiz.context}</p>
                        {!correct && (
                          <p className='text-gray-300 mt-2'>
                            A resposta correta é:{" "}
                            <span className='font-medium text-violet-300'>
                              {quiz.correct_answer}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                    {timeLeft && (
                      <div className='mt-4 text-center text-yellow-300 font-bold'>
                        Próxima questão em:
                        <span className='ml-2 text-xl'>
                          {timeLeft.toString()}
                        </span>
                      </div>
                    )}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ) : null}

        <div className='mt-6 text-center text-sm text-gray-400'>
          Responda corretamente para ganhar 100 pontos por questão
        </div>
      </div>
    </div>
  );
}
