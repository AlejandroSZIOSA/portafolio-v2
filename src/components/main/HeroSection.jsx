export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row pt-8 md:pb-8 items-center justify-center">
      <div className="w-[260px] h-[260px] md:w-[260px] md:h-[260px] bg-white"></div>
      <div className="md:w-96 md:h-48 ml-4 md:mr-16 py-6 text-center md:text-left">
        <p className="font-mono ml-5 text-left">
          Hi!😎 <br></br>My name is <strong>Gabriel Alejandro Sazo, </strong>{" "}
          <br />I am positive, enthusiastic an curious recently graduated
          <strong> Frontend Junior Developer. </strong>
        </p>
      </div>
    </div>
  );
}
