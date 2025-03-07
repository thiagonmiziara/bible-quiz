import { FaGoogle } from "react-icons/fa";
import { manageAuth } from "@/app/actions/manage-auth";
import { Button } from "./ui/button";
import { Session } from "next-auth";

type LoginSectionProps = {
  session: Session | null;
};

export default async function LoginSection({ session }: LoginSectionProps) {
  return (
    <section className='py-16'>
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
            className='gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-violet-500 w-full md:w-auto'
            onClick={manageAuth}
          >
            <FaGoogle className='h-5 w-5 text-violet-400' />
            {session ? "Sair" : "Entrar com Google"}
          </Button>
        </div>
      </div>
    </section>
  );
}
