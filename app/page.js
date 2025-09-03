import About from "./component/About";
import { db } from "@/config/db";

export default async function Home() {
   return (
    <>
     <About/>
    </>      
  );
}



