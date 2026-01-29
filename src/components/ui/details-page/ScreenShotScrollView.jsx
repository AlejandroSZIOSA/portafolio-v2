export default function ScreenShotScrollView({ screenshots }) {
  return (
    <div className="bg-[#deb887] border px-1 py-2 overflow-x-auto h-[10-vh] w-screen lg:w-[70vw]">
      <ol className="flex items-center ml-1">
        {screenshots.map((url, index) => (
          <li key={index} className="flex-shrink-0 mx-2">
            <img src={url} width={240} height={100} alt="no card image" />
          </li>
        ))}
      </ol>
    </div>
  );
}
