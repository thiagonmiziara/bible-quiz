import { auth } from "@/lib/auth";
import LandingPage from "@/pages/home";

export default async function Page() {
  const session = await auth();

  return <LandingPage session={session} />;
}
