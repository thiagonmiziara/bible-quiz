import { api } from "@/lib/axios";
import { useState } from "react";

type QuizData = {
  question_id: number;
  question: string;
  options: string[];
  correct_answer: string;
  difficulty: string;
  context: string;
};

export function useFetchQuiz() {
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  async function fetchQuiz() {
    setLoading(true);
    setSelected(null);
    setCorrect(null);
    setShowFeedback(false);
    setTimeLeft(10);

    try {
      let attempts = 0;
      let newQuiz: QuizData | null = null;

      while (attempts < 5) {
        const response = await api.get("/quiz");
        const data: QuizData = response.data;

        // Verificar se a pergunta já foi respondida
        if (!answeredQuestions.includes(data.question_id)) {
          newQuiz = data;
          break;
        }

        attempts++;
      }

      setQuiz(newQuiz);
    } catch (error) {
      console.error("Erro ao buscar quiz:", error);
      setQuiz(null);
    } finally {
      setLoading(false);
    }
  }

  return {
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
  };
}
