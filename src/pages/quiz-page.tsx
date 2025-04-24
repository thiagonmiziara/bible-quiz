"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, BookOpen } from "lucide-react";
import { api } from "@/lib/axios";

import QuizHeader from "@/components/quiz-header";
import QuizProgress from "@/components/quiz-progress";
import QuizOptions from "@/components/quiz-options";
import QuizFeedback from "@/components/quiz-feedback";
import QuizQuestion from "@/components/quiz-questions";
import { useFetchQuiz } from "@/hooks/use-fetch-quiz";
import { useScoreQuiz } from "@/hooks/use-score-quiz";

export default function QuizPage() {
  const { data: session } = useSession();
  const {
    fetchQuiz,
    answeredQuestions,
    setAnsweredQuestions,
    quiz,
    loading,
    selected,
    setSelected,
    correct,
    setCorrect,
    showFeedback,
    setShowFeedback,
    timeLeft,
    setTimeLeft,
  } = useFetchQuiz();
  const { score, setScore } = useScoreQuiz();

  useEffect(() => {
    fetchQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (correct !== null && timeLeft > 0) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correct, selected, timeLeft]);

  async function handleUpdateUserPoints(newScore: number) {
    try {
      await api.put("/users", {
        userId: session?.user.id,
        points: newScore,
        answerId: quiz?.question_id,
      });
    } catch (error) {
      console.error("Erro ao atualizar pontos do usuário:", error);
    }
  }

  function handleAnswer(option: string) {
    if (!quiz) return;

    setSelected(option);
    const isCorrect = option === quiz.correct_answer;
    setCorrect(isCorrect);
    setShowFeedback(true);

    if (isCorrect) {
      const newScore = score + 100;
      setScore(newScore);
      handleUpdateUserPoints(newScore);
    }

    setAnsweredQuestions((prev) => [...prev, quiz.question_id]);
    setAnsweredQuestions((prev) => [...new Set(prev)]); // Remover duplicações
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-950 to-violet-950 text-white'>
      <div className='w-full max-w-3xl'>
        <QuizHeader score={score} />

        <QuizProgress score={score} isLoading={loading} />

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
                <div className='mb-2 w-full'>
                  <QuizQuestion question={quiz.question} />
                </div>

                <QuizOptions
                  options={quiz.options}
                  selected={selected}
                  correct={correct}
                  handleAnswer={handleAnswer}
                />
              </CardContent>
            </Card>

            {showFeedback && quiz.context && (
              <QuizFeedback
                correct={correct!}
                context={quiz.context}
                correctAnswer={quiz.correct_answer}
                timeLeft={timeLeft}
              />
            )}
          </motion.div>
        ) : answeredQuestions.length >= 10 ? (
          <p className='text-center text-gray-300'>
            Em breve novas perguntas para você!
          </p>
        ) : (
          <p className='text-center text-gray-300'>
            Nenhuma pergunta disponível no momento.
          </p>
        )}

        <div className='mt-6 text-center text-sm text-gray-400'>
          Responda corretamente para ganhar 100 pontos por questão
        </div>
      </div>
    </div>
  );
}
