import GitHubCodeBtn from "@/components/ui/buttons/GitHubCodeBtn";

export default function CodeSectionPanel({
  gitHubFrontendLinkData,
  gitHubBackendLinkData,
}) {
  return (
    <section className="flex flex-col h-auto w-[-webkit-fill-available] bg-white lg:mt-5">
      <h2 className="text-center pt-2 pb-1 lg:py-4">
        <strong>Code</strong>
      </h2>
      <div className="flex flex-row justify-around w-full mx-auto pb-3 lg:pb-10">
        <div className="flex flex-col items-center">
          <h3 className="mb-1">Frontend</h3>
          <GitHubCodeBtn
            gitHubLink={gitHubFrontendLinkData}
            variant="blue"
          ></GitHubCodeBtn>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-1">Backend</h3>
          <GitHubCodeBtn
            gitHubLink={gitHubBackendLinkData}
            variant="blue"
          ></GitHubCodeBtn>
        </div>
      </div>
    </section>
  );
}
