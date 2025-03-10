import { Session } from "next-auth";

import Header from "@/components/header";
import Hero from "@/components/hero";
import VerseDay from "@/components/verse-day";
// import LoginSection from "@/components/login-section";
import { Testimonials } from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";

type LandingPageProps = {
  session: Session | null;
};

export default function LandingPage({ session }: LandingPageProps) {
  return (
    <div className='min-h-screen flex flex-col text-zinc-100 max-w-7xl mx-auto'>
      <Header session={session} />
      <Hero />
      <VerseDay />
      {/* <LoginSection session={session} /> */}
      <Testimonials />
      <CallToAction session={session} />
      <Footer />
    </div>
  );
}
