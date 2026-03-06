export default function DividerHeaderTitle({
  sectionTitle,
  putSectionId,
  variant,
}) {
  return (
    <h2
      /* I am using the Id attribute to link the section to the anchor tag */
      id={putSectionId}
      className={`
        w-full py-2 text-center font-semibold border-black border-dashed border-b-2 border-t-2 lg:border-b-2 ${
          variant === "top-line" && "border-b-0"
        }
      `}
    >
      <strong>{sectionTitle}</strong>
    </h2>
  );
}
