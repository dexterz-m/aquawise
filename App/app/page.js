import Divider from "@/components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="text-black-haze-100">
      <ClerkProvider>

        <Header/>
        <Divider/>

        <Hero/>
        <Footer/>

      </ClerkProvider>
    </div>
  );
}
