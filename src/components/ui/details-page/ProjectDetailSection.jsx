import InfoBox from "@/components/ui/details-page/infoBox";
import ScreenShotScrollView from "@/components/ui/details-page/ScreenShotScrollView";

export default function ProjectDetailSection({
  title,
  descriptionData,
  screenshotsData,
}) {
  return (
    <section className="my-1 lg:flex lg:justify-center lg:my-5">
      <InfoBox title={title} description={descriptionData} />
      <ScreenShotScrollView screenshots={screenshotsData} />
    </section>
  );
}
