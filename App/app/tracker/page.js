import Tracker from "@/components/Tracker";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function waterTracker() {
  return (
    <div>
      <Header/>
      <div className="flex w-full flex-col bg-tuna-900">
        <div className="divider mt-0 mb-0"></div>
      </div>

      <Tracker/>

      <Footer/>
    </div>
  );
}