import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function QuizOptions({
  options,
  selected,
  correct,
  handleAnswer,
}: {
  options?: string[];
  selected: string | null;
  correct: boolean | null;
  handleAnswer: (option: string) => void;
}) {
  return (
    <div className='grid gap-4'>
      {options?.map((option, index) => (
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
            className={`w-full py-4 px-6 text-left text-base font-medium border-2
              ${
                selected === option
                  ? correct
                    ? "border-green-500 bg-green-500/20 text-white"
                    : "border-red-500 bg-red-500/20 text-white"
                  : "border-violet-600/50 bg-gray-800/50 text-violet-100 hover:bg-violet-800/30 hover:border-violet-500"
              }
            `}
          >
            {option}
            {selected === option &&
              (correct ? (
                <CheckCircle2 className='ml-auto text-green-400' />
              ) : (
                <XCircle className='ml-auto text-red-400' />
              ))}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
