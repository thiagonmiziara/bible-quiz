import { auth } from "@/lib/auth";
import LandingPage from "@/pages/home";

export default async function Page() {
  const session = await auth();
  console.log("🚀 ~ LandingPage ~ session:", session);
  return <LandingPage session={session} />;
}
