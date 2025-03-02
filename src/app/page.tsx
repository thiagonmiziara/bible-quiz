"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaGoogle, FaQuoteLeft } from "react-icons/fa";
import { BookOpen, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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
    <div className='min-h-screen bg-zinc-900 flex flex-col text-zinc-100 pt-16'>
      {/* Header */}
      <header className='bg-zinc-900 border-b border-zinc-800'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='flex justify-between items-center p-2 mb-1'>
            <div className='flex items-center space-x-6'>
              <Link href='/' className='text-2xl font-bold text-zinc-100'>
                QuizBíblico
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href='/quiz' legacyBehavior passHref>
                      <NavigationMenuLink className='text-zinc-300 hover:text-violet-400'>
                        Quiz
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href='/sobre' legacyBehavior passHref>
                      <NavigationMenuLink className='text-zinc-300 hover:text-violet-400'>
                        Sobre
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href='/contato' legacyBehavior passHref>
                      <NavigationMenuLink className='text-zinc-300 hover:text-violet-400'>
                        Contato
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Button
              variant='outline'
              size='lg'
              className='gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-violet-500'
            >
              <FaGoogle className='h-5 w-5 text-violet-400' />
              Entrar com Google
            </Button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-zinc-800 to-zinc-900 py-16 md:py-24'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            <div className='flex-1 space-y-4'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100'>
                Teste seu conhecimento bíblico
              </h1>
              <p className='text-lg md:text-xl text-zinc-300'>
                Aprenda, cresça e divirta-se com nosso quiz bíblico interativo.
                Um jeito divertido de aprofundar sua fé.
              </p>
              <div className='pt-4 flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='bg-violet-600 hover:bg-violet-700 text-zinc-100'
                >
                  <Link href='/quiz' className='flex items-center'>
                    Jogar Agora <ChevronRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-violet-400 text-violet-400 hover:bg-violet-950'
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='w-full max-w-md aspect-square bg-zinc-800 rounded-lg shadow-lg p-6 flex items-center justify-center'>
                <BookOpen className='w-32 h-32 text-violet-400' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verse of the Day */}
      <section className='py-16 bg-zinc-800'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-zinc-100'>
              Versículo do Dia
            </h2>
            <p className='text-zinc-400'>Uma palavra para inspirar seu dia</p>
          </div>
          <Card className='mx-auto max-w-3xl bg-gradient-to-r from-zinc-700 to-zinc-800 border-violet-500'>
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

      {/* Login Section */}
      <section className='py-16 bg-zinc-900'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-zinc-100'>
              Entre para Salvar seu Progresso
            </h2>
            <p className='text-zinc-400'>
              Acompanhe seu desempenho e desbloqueie recursos exclusivos
            </p>
          </div>
          <div className='flex justify-center'>
            <Button
              variant='outline'
              size='lg'
              className='gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-violet-500'
            >
              <FaGoogle className='h-5 w-5 text-violet-400' />
              Entrar com Google
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 bg-zinc-800'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-zinc-100'>
              O que nossos usuários dizem
            </h2>
            <p className='text-zinc-400'>
              Depoimentos de pessoas que já estão usando nosso quiz
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className='h-full bg-zinc-700 border-violet-500'
              >
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
                      <p className='font-medium text-zinc-100'>
                        {testimonial.name}
                      </p>
                      <div className='flex'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-zinc-500"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className='text-zinc-300 flex-grow'>
                    {testimonial.comment}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-gradient-to-r from-violet-900 to-cyan-900 text-zinc-100'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Pronto para testar seus conhecimentos?
          </h2>
          <p className='text-zinc-300 mb-8 max-w-2xl mx-auto'>
            Junte-se a milhares de pessoas que estão aprendendo mais sobre a
            Bíblia de forma divertida e interativa.
          </p>
          <Button
            size='lg'
            className='bg-amber-500 hover:bg-amber-600 text-zinc-900'
          >
            <Link href='/quiz' className='flex items-center'>
              Jogar Agora <ChevronRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-zinc-950 text-zinc-100 py-12'>
        <div className='container mx-auto max-w-6xl px-4 md:px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>Quiz Bíblico</h3>
              <p className='text-zinc-400'>
                Aprenda e cresça em seu conhecimento bíblico através de nosso
                quiz interativo.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-4'>Links Rápidos</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/'
                    className='text-zinc-400 hover:text-violet-400'
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href='/quiz'
                    className='text-zinc-400 hover:text-violet-400'
                  >
                    Quiz
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sobre'
                    className='text-zinc-400 hover:text-violet-400'
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contato'
                    className='text-zinc-400 hover:text-violet-400'
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-bold mb-4'>Contato</h3>
              <p className='text-zinc-400'>contato@quizbiblico.com</p>
              <p className='text-zinc-400'>+55 (11) 99999-9999</p>
            </div>
          </div>
          <Separator className='my-8 bg-zinc-700' />
          <div className='text-center text-zinc-500'>
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
