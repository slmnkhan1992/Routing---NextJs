import Image from "next/image";
import Link from "next/link";
import welcome from './../assets/welcome.png'
import Nav from "@/components/page";

export default function Home() {
  return (
    <>
      <Nav/>
      <div className="h-screen w-full lg:flex md:flex">
        <div className="h-full w-2/4 pl-10 pt-32">
          <h1 className="text-yellow-400 text-6xl font-bold">WELLCOME</h1>
          <h2 className="text-blue-950 text-5xl font-semibold -mt-2">to our site</h2>
          <p className="mt-7">Welcome to our website! We're thrilled to have you here. Explore our diverse range of services and resources designed to meet your needs and provide you with an exceptional experience. Whether you're looking for information, inspiration, or innovative solutions, our team is committed to delivering excellence. Take a moment to browse through our offerings and feel free to reach out with any questions. We're here to help you succeed!</p>
        </div>
        <div className="h-full w-2/4 overflow-hidden "> <Image src={welcome} alt="character" /></div>
      </div>
    </>
  );
}
