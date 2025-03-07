import { BookOpen } from "lucide-react";

export default async function Hero() {
  return (
    <section className='py-16 md:py-24'>
      <div className='container mx-auto max-w-6xl px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          <div className='flex-1 space-y-4'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100'>
              Teste seu conhecimento bíblico
            </h1>
            <p className='text-lg md:text-xl text-zinc-300'>
              Aprenda, cresça e divirta-se com nosso quiz bíblico interativo. Um
              jeito divertido de aprofundar sua fé.
            </p>
          </div>
          <div className='flex-1 flex justify-center'>
            <div className='w-full max-w-md aspect-square bg-zinc-800 rounded-lg shadow-lg p-6 flex items-center justify-center'>
              <BookOpen className='w-32 h-32 text-violet-400' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
