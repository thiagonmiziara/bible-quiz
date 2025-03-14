import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useUser } from "./use-user";

export function useScoreQuiz() {
  const { data: session } = useSession();
  const { user } = useUser(session?.user.id);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (user) {
      setScore(user.points);
    }
  }, [user]);

  return { score, setScore };
}
