import { motion } from "framer-motion";

type QuizQuestionProps = {
  question: string;
};

export default function QuizQuestion({ question }: QuizQuestionProps) {
  return (
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
      {question}
    </motion.p>
  );
}
