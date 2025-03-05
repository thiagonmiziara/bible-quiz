"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type QuizData = {
  question: string;
  options: string[];
  correct_answer: string;
  difficulty: string;
};

export default function QuizPage() {
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);

  async function fetchQuiz() {
    setLoading(true);
    setSelected(null);
    setCorrect(null);
    try {
      const response = await fetch("/api/quiz");
      if (!response.ok) {
        throw new Error("Error fetching quiz");
      }
      const data = await response.json();
      console.log("🚀 ~ fetchQuiz ~ data:", data);
      setQuiz(data);
    } catch (error) {
      console.error("Erro ao buscar quiz:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchQuiz();
  }, []);

  function handleAnswer(option: string) {
    setSelected(option);
    setCorrect(option === quiz?.correct_answer);
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-4 text-white'>
      <Card className='w-full max-w-lg p-4 shadow-lg'>
        <CardHeader>
          <CardTitle className='text-xl text-center'>
            📖 Quiz de Bíblico
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className='flex justify-center'>
              <Loader2 className='animate-spin' size={32} />
            </div>
          ) : quiz ? (
            <>
              <p className='text-lg text-center mb-4'>{quiz.question}</p>
              <div className='grid grid-cols-2 gap-4'>
                {quiz.options?.map((option) => (
                  <Button
                    key={option}
                    variant={
                      selected
                        ? option === quiz.correct_answer
                          ? "secondary"
                          : "destructive"
                        : "default"
                    }
                    size='lg'
                    className='border-violet-400 hover:bg-violet-950 cursor-pointer'
                    onClick={() => handleAnswer(option)}
                    disabled={selected !== null}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              {selected && (
                <p
                  className={`mt-4 text-center font-bold ${
                    correct ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {correct ? "✅ Resposta correta!" : "❌ Resposta errada!"}
                </p>
              )}
              <div className='flex justify-center mt-4'>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-violet-400 text-violet-400 hover:bg-violet-950 cursor-pointer'
                  onClick={fetchQuiz}
                >
                  🔄 Nova Pergunta
                </Button>
              </div>
            </>
          ) : (
            <p className='text-center text-red-500'>
              Erro ao carregar pergunta.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
