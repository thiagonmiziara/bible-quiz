"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaGoogle, FaQuoteLeft } from "react-icons/fa";
import { BookOpen, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

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

// Mock testimonials
const testimonials = [
  {
    name: "Maria Silva",
    avatar: "/placeholder.svg?height=40&width=40",
    comment:
      "Este quiz me ajudou a aprofundar meu conhecimento bíblico de uma forma divertida e interativa!",
    rating: 5,
  },
  {
    name: "João Oliveira",
    avatar: "/placeholder.svg?height=40&width=40",
    comment:
      "Uso o app todos os dias para meu devocional. Os versículos diários são uma bênção para começar o dia.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    avatar: "/placeholder.svg?height=40&width=40",
    comment:
      "Recomendo para todos que querem testar seus conhecimentos bíblicos. Ótima ferramenta para grupos de estudo!",
    rating: 4,
  },
  {
    name: "Pedro Santos",
    avatar: "/placeholder.svg?height=40&width=40",
    comment:
      "Excelente aplicativo para memorizar versículos e aprender mais sobre a Bíblia. Interface muito intuitiva.",
    rating: 5,
  },
];

export default function LandingPage() {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  useEffect(() => {
    // Change verse every 24 hours (in a real app)
    // For demo purposes, we'll use a random verse on each page load
    const randomIndex = Math.floor(Math.random() * verses.length);
    setCurrentVerseIndex(randomIndex);
  }, []);

  const currentVerse = verses[currentVerseIndex];

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-primary-100 to-background py-16 md:py-24'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            <div className='flex-1 space-y-4'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground'>
                Teste seu conhecimento bíblico
              </h1>
              <p className='text-lg md:text-xl text-foreground/80'>
                Aprenda, cresça e divirta-se com nosso quiz bíblico interativo.
                Um jeito divertido de aprofundar sua fé.
              </p>
              <div className='pt-4 flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='bg-primary-500 hover:bg-primary-600 text-white'
                >
                  <Link href='/quiz' className='flex items-center'>
                    Jogar Agora <ChevronRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-primary-300 text-primary-700'
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='w-full max-w-md aspect-square bg-white rounded-lg shadow-lg p-6 flex items-center justify-center'>
                <BookOpen className='w-32 h-32 text-primary-400' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verse of the Day */}
      <section className='py-16 bg-background'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-foreground'>
              Versículo do Dia
            </h2>
            <p className='text-foreground/70'>
              Uma palavra para inspirar seu dia
            </p>
          </div>
          <Card className='mx-auto max-w-3xl bg-gradient-to-r from-primary-50 to-accent-50 border-primary-100'>
            <CardContent className='p-8 md:p-12 text-center'>
              <FaQuoteLeft className='mx-auto mb-4 text-primary-400 h-8 w-8' />
              <p className='text-xl md:text-2xl font-medium text-foreground mb-4 italic'>
                &quot;{currentVerse.text}&quot;
              </p>
              <p className='text-lg font-semibold text-primary-700'>
                {currentVerse.reference}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Login Section */}
      <section className='py-16 bg-primary-50'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-foreground'>
              Entre para Salvar seu Progresso
            </h2>
            <p className='text-foreground/70'>
              Acompanhe seu desempenho e desbloqueie recursos exclusivos
            </p>
          </div>
          <div className='flex justify-center'>
            <Button variant='outline' size='lg' className='gap-2'>
              <FaGoogle className='h-5 w-5 text-foreground' />
              Entrar com Google
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 bg-background'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-foreground'>
              O que nossos usuários dizem
            </h2>
            <p className='text-foreground/70'>
              Depoimentos de pessoas que já estão usando nosso quiz
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className='h-full'>
                <CardContent className='p-6 flex flex-col h-full'>
                  <div className='flex items-center gap-4 mb-4'>
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='font-medium'>{testimonial.name}</p>
                      <div className='flex'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "text-secondary-400 fill-secondary-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className='text-foreground/80 flex-grow'>
                    {testimonial.comment}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Pronto para testar seus conhecimentos?
          </h2>
          <p className='text-white/80 mb-8 max-w-2xl mx-auto'>
            Junte-se a milhares de pessoas que estão aprendendo mais sobre a
            Bíblia de forma divertida e interativa.
          </p>
          <Button
            size='lg'
            className='bg-secondary-400 hover:bg-secondary-500 text-foreground'
          >
            <Link href='/quiz' className='flex items-center'>
              Jogar Agora <ChevronRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-foreground text-white py-12'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>Quiz Bíblico</h3>
              <p className='text-white/70'>
                Aprenda e cresça em seu conhecimento bíblico através de nosso
                quiz interativo.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-4'>Links Rápidos</h3>
              <ul className='space-y-2'>
                <li>
                  <Link href='/' className='text-white/70 hover:text-white'>
                    Início
                  </Link>
                </li>
                <li>
                  <Link href='/quiz' className='text-white/70 hover:text-white'>
                    Quiz
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sobre'
                    className='text-white/70 hover:text-white'
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contato'
                    className='text-white/70 hover:text-white'
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-4'>Contato</h3>
              <p className='text-white/70'>contato@quizbiblico.com</p>
              <p className='text-white/70'>+55 (11) 99999-9999</p>
            </div>
          </div>
          <Separator className='my-8 bg-white/20' />
          <div className='text-center text-white/50'>
            <p>
              &copy; {new Date().getFullYear()} Quiz Bíblico. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
