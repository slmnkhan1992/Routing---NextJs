import Image from "next/image";
import Link from "next/link";
import welcome from './../assets/welcome.png'
import Nav from "@/components/page";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="h-screen w-full lg:flex md:flex bg-blue-100">
        <div className="h-full w-2/4 pl-10 pt-32">
          <h1 className="text-blue-500 text-6xl font-bold">WELLCOME</h1>
          <h2 className="text-blue-950 text-4xl font-semibold -mt-2 my-4">This is Muhammad Salman</h2>
          <p className="mt-7">I am currently expanding my technical expertise through a Full Stack Development course at SMIT and delving into TypeScript, Web 3.0, and Generative AI with GIAIC. With a solid foundation in technology and a keen interest in the latest innovations, I'm dedicated to bridging the gap between modern development practices and cutting-edge advancements.

            In addition to my tech-focused studies, I bring 5 years of experience as a cost accountant, where I honed my analytical skills and attention to detail. My background in accounting equips me with a strong problem-solving mindset and a strategic approach to complex challenges.

            I am excited to leverage my diverse skill set in new and dynamic ways, driving growth and innovation at the intersection of technology and finance.</p>
        </div>
        <div className="h-full w-2/4 overflow-hidden "> <Image src={welcome} alt="character" /></div>
      </div>
    </>
  );
}
