import Link from "next/link";
import { Button } from "./ui/button";
import { manageAuth } from "@/app/actions/manage-auth";
import { FaGoogle } from "react-icons/fa";
import { Session } from "next-auth";
import Image from "next/image";

type HeaderProps = {
  session: Session | null;
};

export default function Header({ session }: HeaderProps) {
  return (
    <header className='p-4'>
      <div className='container mx-auto max-w-6xl px-4 md:px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center p-2 mb-1 space-y-4 md:space-y-0'>
          <div className='flex items-center space-x-6'>
            <Link href='/' className='text-2xl font-bold text-zinc-100'>
              QuizBíblico
            </Link>
          </div>

          <form action={manageAuth} className='flex gap-2'>
            <Button
              variant='outline'
              className='gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-violet-500 w-full md:w-auto'
            >
              {session ? (
                <>
                  <Image
                    src={session?.user?.image ?? "/default-image.jpg"}
                    alt={session?.user?.name ?? "Default User"}
                    width={20}
                    height={20}
                    className='rounded-full'
                  />
                  <span>{session?.user?.name}</span>
                </>
              ) : (
                <>
                  <FaGoogle className='h-5 w-5 text-violet-400' />
                  Entrar com Google
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}
