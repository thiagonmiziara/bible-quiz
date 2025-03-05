import { NextResponse } from "next/server";

// Array de perguntas contendo as questões e informações adicionais
const questions = [
  {
    question: "Qual é o nome do primeiro livro da Bíblia Sagrada?",
    options: ["a) Êxodo", "b) Gênesis", "c) Salmos", "d) Isaías"],
    correct_answer: "b) Gênesis",
    context:
      "Gênesis é o primeiro livro da Bíblia Sagrada e narra a criação do mundo, dos humanos e das primeiras histórias da humanidade.",
    difficulty: "easy",
  },
  {
    question:
      "Qual o nome e a idade da pessoa mais velha mencionada na Bíblia?",
    options: [
      "A) Enos, viveu 905 anos",
      "B) Noé, viveu 990 anos",
      "C) Matusalém, viveu 969 anos",
      "D) Rainha Ester, viveu 859 anos",
    ],
    correct_answer: "C) Matusalém, viveu 969 anos",
    context:
      "Matusalém (ou Metusalém) viveu 969 anos. Ele era filho de Enoque, que andou com Deus e foi o avô de Noé.",
    difficulty: "hard",
  },
];

export async function GET() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];
  return NextResponse.json(question);
}
