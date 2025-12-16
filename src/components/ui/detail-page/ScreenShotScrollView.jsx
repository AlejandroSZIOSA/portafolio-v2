import ScreenshotShow from "../ScreenshotShow";

export default function ScreenShotScrollView({ screenshots }) {
  return (
    <div className="bg-red-200 border px-1 py-3 overflow-x-auto h-[560px] w-[350px] scrollbar-hide">
      <ol className="flex">
        {screenshots.map((url, index) => (
          <li key={index} className="flex-shrink-0 w-64">
            <ScreenshotShow url={url} />
          </li>
        ))}
      </ol>
    </div>
  );
}
