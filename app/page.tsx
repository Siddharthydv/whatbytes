import Image from "next/image";
import Dashboard from "./components/dashboard";
import AppBar from "./components/Appbar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
  <div className="flex-col p-6 space-y-3">
    <AppBar/>
    <div className="flex w-full border h-full p-6 space-x-3">
      <Navbar/>
      <Dashboard/> 
    </div>
   
    </div>
  );
}
