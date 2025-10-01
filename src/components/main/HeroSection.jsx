import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row pt-8 md:pb-8 items-center justify-center">
      {/* <div className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] bg-white"></div> */}
      <Image
        src={"/images/me/me-black_b.png"}
        width={300}
        height={150}
        alt="no picture"
        priority
      />
      <div className="py-6 text-center md:w-96 md:h-auto md:mr-16 md:text-left">
        <p className="font-mono ml-5 m-2 text-left text-lg md:text-2xl">
          Hi!😎 <br></br>My name is <strong>Gabriel Alejandro Sazo. </strong>I
          am a positive, curious and high focused recently graduated
          <strong> Frontend Developer. </strong>
        </p>
      </div>
    </div>
  );
}
