const TOP_LINE = "border-b-0 lg:border-b-2 lg:border-t-2"; //lg:border-b-2 applies only desktop
const BOTH_LINES = "border-b-2";

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
        w-full py-2 text-center font-semibold border-black border-dashed border-t-2 ${
          variant === "top-line" ? TOP_LINE : BOTH_LINES
        }
      `}
    >
      <strong>{sectionTitle}</strong>
    </h2>
  );
}
