"use client";
import Link from "next/link";
import Image from "next/image";
import { Trophy, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@/hooks/use-user";

export default function QuizHeader({ score }: { score: number }) {
  const { data: session, status } = useSession();
  const { loading } = useUser(session?.user.id);

  return (
    <div className='flex justify-between items-center w-full mb-6'>
      <Link href='/'>
        <Button
          variant='ghost'
          className='flex items-center text-violet-200 hover:text-violet-100 hover:bg-violet-900/30 px-4 py-2 rounded-full'
        >
          <ChevronLeft size={20} className='mr-2' />
          Voltar
        </Button>
      </Link>
      <div className='flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-full'>
        {status === "loading" || status === "unauthenticated" || loading ? (
          <>
            <Skeleton className='w-5 h-5 rounded-full bg-amber-100' />
            <Skeleton className='w-50 h-4 rounded-md bg-amber-50' />
            <div className='w-px h-6 bg-gray-700 mx-2'></div>
            <Trophy size={18} className='text-yellow-400' />
            <Skeleton className='w-20 h-4 rounded-md bg-amber-50' />
          </>
        ) : (
          <>
            <Image
              src={session?.user?.image as string}
              alt='Avatar do usuário logado!'
              width={20}
              height={20}
              className='rounded-full'
            />
            <span className='text-violet-200'>{session?.user?.name}</span>
            <div className='w-px h-6 bg-gray-700 mx-2'></div>
            <Trophy size={18} className='text-yellow-400' />
            <span className='font-bold text-yellow-300 min-w-8'>
              {score} pontos
            </span>
          </>
        )}
      </div>
    </div>
  );
}
