const TOP_LINE = "border-b-0 lg:border-b-2 lg:border-t-2"; //lg:border-b-2 applies only desktop

//TODO add more variants to this component, like one with only the top line, or one with only the bottom line, or one with no lines at all, etc. I can use the variant prop to determine which lines to apply, and I can use the putSectionId prop to add an id to the h2 element for linking purposes.
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
        w-full py-2 text-center font-semibold border-black bg-[#FFE4C4] lg:bg-transparent border-dashed border-t-2 ${
          variant === "top-line" ? TOP_LINE : BOTH_LINES
        }
      `}
    >
      <strong>{sectionTitle}</strong>
    </h2>
  );
}
