export default function InfoBox({ title, description }) {
  return (
    <div className="border border-black p-2 m-2 lg:w-[15%]">
      <h3 className="text-center mb-1">
        <strong> {title}</strong>
      </h3>
      <p>{description}</p>
    </div>
  );
}
