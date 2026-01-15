import InfoBox from "@/components/ui/details-page/InfoBox";
import ScreenShotScrollView from "@/components/ui/details-page/ScreenShotScrollView";

export default function ProjectDetailSection({
  title,
  descriptionData,
  screenshotsData,
}) {
  return (
    <section className="my-1 lg:flex lg:justify-center lg:my-5">
      <InfoBox title={title} description={descriptionData} />
      <p className="text-center font-semibold pb-1 bold lg:hidden">
        {"<-"} horizontal-scrolling {"->"}
      </p>
      <ScreenShotScrollView screenshots={screenshotsData} />
    </section>
  );
}
