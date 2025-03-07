import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className=' text-zinc-100 py-12'>
      <Separator className='my-8 bg-zinc-700' />
      <div className='text-center text-zinc-500'>
        <p>
          &copy; {new Date().getFullYear()} Quiz Bíblico. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
