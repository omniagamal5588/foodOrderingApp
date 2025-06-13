import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import BestSellers from "./_components/BestSellers";
import { db } from "@/lib/prisma";
import About from "@/components/about";
import Contact from "@/components/contact";

export default async function Home() {
 

 
  return (
    <main>
     <Hero/>
     <BestSellers />
     <About/>
     <Contact/>
    </main>
  );
}
