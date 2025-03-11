"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { manageAuth } from "@/app/actions/manage-auth";
import { ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";

export default function CallToAction() {
  const { data: session } = useSession();
  return (
    <section className='py-16 bg-gradient-to-r from-violet-900 to-cyan-900 text-zinc-100'>
      <div className='container mx-auto max-w-6xl px-4 md:px-6 text-center'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>
          Pronto para testar seus conhecimentos?
        </h2>
        <p className='text-zinc-300 mb-8 max-w-2xl mx-auto'>
          Junte-se a milhares de pessoas que estão aprendendo mais sobre a
          Bíblia de forma divertida e interativa.
        </p>
        {session && (
          <Button
            size='lg'
            className='bg-amber-500 hover:bg-amber-600 text-zinc-900'
            onClick={manageAuth}
          >
            <Link href={"/quiz"} className='flex items-center'>
              Jogar Agora <ChevronRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
}
