import Image from "next/image";
import Dashboard from "./components/dashboard";
import AppBar from "./components/Appbar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
  <div className="flex-col p-6 space-y-3">
    <div className="px-6">
    <AppBar/>
    </div>
    
    <div className="flex w-full h-full p-6 space-x-3">
      <Navbar/>
      <Dashboard/> 
    </div>
   
    </div>
  );
}
