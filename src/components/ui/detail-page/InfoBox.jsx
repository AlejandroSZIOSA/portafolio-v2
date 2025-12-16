export default function InfoBox({ title, description }) {
  return (
    <div className="border border-black p-2">
      <h3 className="text-left mb-1">
        <strong> {title}</strong>
      </h3>
      <p>{description}</p>
    </div>
  );
}
