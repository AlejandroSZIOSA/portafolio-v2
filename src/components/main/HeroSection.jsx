export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row-reverse pt-8 md:pb-8 items-center justify-center">
      <div className="w-[340px] h-[340px] md:w-[260px] md:h-[260px] bg-white"></div>
      <div className="md:w-96 md:h-48 ml-4 md:mr-16 py-6 text-center md:text-left">
        <h2>
          Hi!😎 My name is <strong>Gabriel Sazo, </strong> <br />I am an
          enthusiastic <strong>Frontend Developer</strong> student.
        </h2>
      </div>
    </div>
  );
}
