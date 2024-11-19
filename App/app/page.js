import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-black-haze-100">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}
