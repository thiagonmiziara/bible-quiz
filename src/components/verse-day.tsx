"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

// Mock data for verse of the day
const verses = [
  {
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16",
  },
  {
    text: "O Senhor é o meu pastor, nada me faltará.",
    reference: "Salmos 23:1",
  },
  {
    text: "Tudo posso naquele que me fortalece.",
    reference: "Filipenses 4:13",
  },
  {
    text: "E conhecereis a verdade, e a verdade vos libertará.",
    reference: "João 8:32",
  },
  {
    text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
    reference: "Isaías 41:10",
  },
];

export default function VerseDay() {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  useEffect(() => {
    // Change verse every 24 hours (in a real app)
    // For demo purposes, we'll use a random verse on each page load
    const randomIndex = Math.floor(Math.random() * verses.length);
    setCurrentVerseIndex(randomIndex);
  }, []);

  const currentVerse = verses[currentVerseIndex];

  return (
    <section className='py-16'>
      <div className='container mx-auto w-full px-4 md:px-6'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-zinc-100'>
            Versículo do Dia
          </h2>
          <p className='text-zinc-400'>Uma palavra para inspirar seu dia</p>
        </div>
        <Card className='mx-auto w-full bg-gradient-to-r from-zinc-700 to-zinc-800 border-violet-500'>
          <CardContent className='p-8 md:p-12 text-center'>
            <FaQuoteLeft className='mx-auto mb-4 text-violet-400 h-8 w-8' />
            <p className='text-xl md:text-2xl font-medium text-zinc-100 mb-4 italic'>
              &quot;{currentVerse.text}&quot;
            </p>
            <p className='text-lg font-semibold text-violet-400'>
              {currentVerse.reference}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
