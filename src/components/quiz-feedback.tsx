import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function QuizFeedback({
  correct,
  context,
  correctAnswer,
  timeLeft,
}: {
  correct: boolean;
  context: string;
  correctAnswer: string;
  timeLeft: number;
}) {
  return (
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
        <div>
          <h3
            className={`font-bold ${
              correct ? "text-green-400" : "text-red-400"
            }`}
          >
            {correct ? "Resposta correta!" : "Resposta incorreta"}
          </h3>
          <p className='text-gray-200'>{context}</p>
          {!correct && (
            <p className='text-gray-300 mt-2'>
              A resposta correta é:{" "}
              <span className='font-medium text-violet-300'>
                {correctAnswer}
              </span>
            </p>
          )}
        </div>
      </div>
      {timeLeft && (
        <div className='mt-4 text-center text-yellow-300 font-bold'>
          Próxima questão em: {timeLeft}s
        </div>
      )}
    </motion.div>
  );
}
