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
];

export async function GET() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];
  return NextResponse.json(question);
}
