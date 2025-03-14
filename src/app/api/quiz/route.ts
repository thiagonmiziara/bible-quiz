import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

const questions = [
  {
    question_id: 1,
    question: "Qual é o nome do primeiro livro da Bíblia Sagrada?",
    options: ["a) Êxodo", "b) Gênesis", "c) Salmos", "d) Isaías"],
    correct_answer: "b) Gênesis",
    context:
      "Gênesis é o primeiro livro da Bíblia Sagrada e narra a criação do mundo, dos humanos e das primeiras histórias da humanidade.",
  },
  {
    question_id: 2,
    question:
      "Qual o nome e a idade da pessoa mais velha mencionada na Bíblia?",
    options: ["A) Enos", "B) Noé", "C) Matusalém", "D) Rainha Ester"],
    correct_answer: "C) Matusalém",
    context:
      "Matusalém (ou Metusalém) viveu 969 anos. Ele era filho de Enoque, que andou com Deus e foi o avô de Noé.",
  },
  {
    question_id: 3,
    question: "Qual desses não teve o seu nome mudado na Bíblia?",
    options: ["A) Sara", "B) Abraão", "C)Jacó", "D) Davi"],
    correct_answer: "D) Davi",
    context:
      "Davi não teve seu nome mudado. Sara era Sarai (Gn.17:15), Abraão era Abrão (Gn. 17:5), Jacó tornou-se Israel (Gn. 32.28) e Pedro era Simão (João 1:42)",
  },
  {
    question_id: 4,
    question:
      "Qual dos nomes de Deus Moisés deveria dar aos israelitas, quando falasse de quem tinha lhe enviado?",
    options: [
      "A) Elohim",
      "B) El Shadday",
      "C) Eu sou o que sou",
      "D) Eu sou o Senhor",
    ],
    correct_answer: "C) Eu sou o que sou",
    context:
      "Eu sou o que Sou foi a resposta dada por Deus a Moisés, quando perguntou sobre o Seu nome. Cf. Êxodo 3:13-14.",
  },
  {
    question_id: 5,
    question: "Sobre Samuel, o que não é verdade?",
    options: [
      "A) Sua mãe se chamava Ana",
      "B) Ungiu 3 reis de Israel: José, Saul e Davi",
      "C) Sucedeu o profeta Eli",
      "D) Teve uma visão enquanto ainda era muito novo",
    ],
    correct_answer: "B) Ungiu 3 reis de Israel: José, Saul e Davi",
    context:
      "O profeta Samuel ungiu a Saul e Davi como reis de Israel. José não foi rei. Foi governador no Egito muitos anos antes.",
  },
  {
    question_id: 6,
    question: "Que animal falou com Balaão?",
    options: ["A) jumenta", "B) camelo", "C) cordeiro", "D) pomba"],
    correct_answer: "A) jumenta",
    context:
      "O Senhor fez a jumenta falar com Balaão quando este ia ao encontro de Balaque para amaldiçoar o povo de Deus em troca de riquezas. Cf. Números 22:28",
  },
  {
    question_id: 7,
    question:
      "Enquanto pastor de ovelhas, Davi protegeu seu rebanho de dois animais perigosos. Quais?",
    options: [
      "A) serpente e dromedário",
      "B) urso e leão",
      "C) cobra e lobo",
      "D) urso e escorpião",
    ],
    correct_answer: "B) urso e leão",
    context:
      "Um leão e um urso foram os animais que Davi matou. Cf. 1 Samuel 17:34-37",
  },
  {
    question_id: 8,
    question:
      "Quando bebê, como Moisés foi salvo do decreto infanticida do Faraó?",
    options: [
      "A) Foi levado às pressas para fora do Egito",
      "B) Foi escondido dentro de uma caverna",
      "C) Foi colocado num cesto e lançado no rio",
      "D)  Foi levado ao templo para servir a Deus",
    ],
    correct_answer: "C) Foi colocado num cesto e lançado no rio",
    context:
      " Moisés foi colocado num cestinho e deixado à beira rio. A filha do Faraó viu e adotou-o como seu filho.",
  },
];

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
