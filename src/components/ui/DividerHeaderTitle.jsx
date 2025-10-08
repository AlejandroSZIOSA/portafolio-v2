export default function DividerHeaderTitle({ sectionTitle, putSectionId }) {
  return (
    <>
      <h2
        /* I am using the Id attribute to link the section to the anchor tag */
        id={putSectionId}
        className="w-full py-2 text-center font-semibold border-black border-t-2 border-b-2 border-dashed"
      >
        {sectionTitle}
      </h2>
    </>
  );
}
