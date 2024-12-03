import Footer from "../components/Footer";
import PreHeader from "../components/PreHeader";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="text-black-haze-100">
      <PreHeader/>
      <div className="flex w-full flex-col bg-tuna-900 ">
        <div className="divider mt-0 mb-0"></div>
      </div>
      <Hero/>
      <Footer/>
    </div>
  );
}
