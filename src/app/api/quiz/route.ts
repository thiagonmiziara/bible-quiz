import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { questions } from "./questions";

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  emailVerified?: string | null;
  questionAnswer?: number[];
  points?: number;
  sessionToken?: string;
  expires?: string;
}
export async function GET() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const answeredQuestions =
      (session.user as unknown as User).questionAnswer || [];

    const availableQuestions = questions.filter(
      (q) => !answeredQuestions.includes(q.question_id)
    );

    if (availableQuestions.length === 0) {
      return NextResponse.json({
        message: "Todas as perguntas já foram respondidas!",
      });
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];

    return NextResponse.json(question);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar perguntas" },
      { status: 500 }
    );
  }
}
