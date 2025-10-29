const Header = () => {
  return (
    <section className="relative px-4 lg:px-6 py-[20vh] 2xl:py-64 flex flex-col justify-center">
      <div className="hidden xl:block absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        <div className="relative w-full h-full max-w-[96rem] mx-auto">
          <div className="absolute z-10" style={{ bottom: "40%", left: "8%" }}>
            <div
              className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "rgb(255, 236, 179)",
                border: "1px solid rgba(0, 0, 0, 0.03)",
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 4px",
              }}
            >
              <h3 className="text-sm font-medium text-charcoal-600 text-center px-5">
                Market research
              </h3>
            </div>
          </div>
          <div
            className="absolute rounded-md z-10"
            style={{
              bottom: "20%",
              left: "5%",
              width: 180,
              backgroundColor: "rgb(250, 250, 247)",
              border: "1px solid rgba(0, 0, 0, 0.03)",
              boxShadow: "rgba(0, 0, 0, 0.03) 0px 2px 4px",
            }}
          >
            <div className="p-3">
              <h4 className="font-medium text-charcoal-500 mb-2 text-xs">
                Sources
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://www.reddit.com/favicon.ico"
                    alt="Reddit"
                    className="w-3 h-3"
                  />
                  <div className="flex-1">
                    <div className="h-2 bg-charcoal-150 rounded-full w-full" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://x.com/favicon.ico"
                    alt="X"
                    className="w-3 h-3"
                  />
                  <div className="flex-1">
                    <div className="h-2 bg-charcoal-150 rounded-full w-3/4" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://cdn.ncbi.nlm.nih.gov/coreutils/nwds/img/favicons/favicon.ico"
                    alt="PubMed"
                    className="w-3 h-3"
                  />
                  <div className="flex-1">
                    <div className="h-2 bg-charcoal-150 rounded-full w-4/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-10" style={{ top: "16%", right: "12%" }}>
            <div
              className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "rgb(200, 230, 201)",
                border: "1px solid rgba(0, 0, 0, 0.03)",
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 4px",
              }}
            >
              <h3 className="text-sm font-medium text-charcoal-600 text-center px-5">
                Build product
              </h3>
            </div>
          </div>
          <div
            className="absolute rounded-md z-10"
            style={{
              top: "35%",
              right: "5%",
              width: 200,
              backgroundColor: "rgb(250, 250, 247)",
              border: "1px solid rgba(0, 0, 0, 0.03)",
              boxShadow: "rgba(0, 0, 0, 0.03) 0px 2px 4px",
            }}
          >
            <div className="p-3">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-charcoal-600 text-sm">
                  Development plan
                </h4>
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-charcoal-400 mt-0.5"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="w-full bg-charcoal-150 rounded-full h-2">
                  <div
                    className="bg-terracotta-500 h-2 rounded-full"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block absolute inset-0 overflow-hidden pointer-events-none opacity-80">
        <div className="relative w-full h-full max-w-[96rem] mx-auto">
          <div
            className="absolute animate-float-1"
            style={{ bottom: "37%", left: "8%" }}
          >
            <div className="relative">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                className="text-terracotta-500"
                style={{ transform: "scaleX(-1)" }}
              >
                <path
                  d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute top-[18px] right-[18px] bg-terracotta-500 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                AI
              </div>
            </div>
          </div>
          <div
            className="absolute animate-cursor-right"
            style={{ top: "28%", right: "12%" }}
          >
            <div className="relative">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                className="text-charcoal-400"
              >
                <path
                  d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute top-[18px] left-[18px] bg-charcoal-500 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                You
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-4 px-3 py-2 inline-flex items-center bg-gradient-to-r from-charcoal-400 to-charcoal-500 rounded-full shadow-md">
            <h1 className="text-[10px] lg:text-[12px] font-medium text-white leading-none">
              AI cofounder
            </h1>
          </div>
          <h2 className="max-w-xs lg:max-w-2xl mb-2 lg:mb-4 text-2xl lg:text-5xl font-bold text-charcoal-500">
            Make something people actually want
          </h2>
          <p className="max-w-2xl mb-6 lg:mb-12 text-lg lg:text-xl text-charcoal-350">
            Research and plan your product with AI
          </p>
          <div className="max-w-3xl w-full">
            <form className="relative mb-4 p-3 bg-ivory-50 border rounded-3xl shadow-md transition-all duration-200 ease-in-out border-ivory-300 hover:border-charcoal-150">
              <textarea
                className="w-full pr-12 rounded-md px-2 py-2 text-base text-charcoal-500 bg-transparent placeholder:text-charcoal-250 focus:outline-none resize-none overflow-y-auto"
                placeholder="I want to create a platform for remote teams.."
                style={{ minHeight: 110, maxHeight: 192, height: 110 }}
                autoFocus
                defaultValue={""}
              />
              <button
                type="submit"
                className="absolute bottom-3 right-3 w-[34px] h-[34px] flex items-center justify-center text-white rounded-[12px] transition-all duration-200 ease-in-out bg-terracotta-500/50 cursor-default"
                aria-label="Send message"
                disabled
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 384 512"
                  height={16}
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
              </button>
            </form>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-b from-ivory-50 to-ivory-100 hover:bg-ivory-100 border border-ivory-300 hover:border-charcoal-150 text-charcoal-450 rounded-full shadow-sm transition-all duration-200 ease-in-out z-10"
                aria-label="Brainstorm ideas"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 256 256"
                  className="w-3.5 h-3.5 lg:w-4 lg:h-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z" />
                </svg>
                <span className="text-xs lg:text-sm font-medium">
                  Brainstorm ideas
                </span>
              </button>
              <div className="relative inline-block " data-tooltip-id=":r1:">
                <div className="flex items-center gap-1.5 lg:gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 256 256"
                    className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-charcoal-350"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M244,104H219.21L175.82,44.24a20,20,0,0,0-31.61-.94L131.39,58.16c-.1.11-.2.23-.29.35a4,4,0,0,1-6.2,0c-.09-.12-.19-.24-.29-.35L111.79,43.3a20,20,0,0,0-31.61.94L36.79,104H12a12,12,0,0,0,0,24H244a12,12,0,0,0,0-24ZM96.62,62.45l9.69,11.24a28,28,0,0,0,43.38,0l9.69-11.24L189.55,104H66.45ZM180,140a40.07,40.07,0,0,0-38.16,28H114.16a40,40,0,1,0,0,24h27.68A40,40,0,1,0,180,140ZM76,196a16,16,0,1,1,16-16A16,16,0,0,1,76,196Zm104,0a16,16,0,1,1,16-16A16,16,0,0,1,180,196Z" />
                  </svg>
                  <span className="mr-0.5 lg:mr-1 text-xs lg:text-sm font-medium text-charcoal-450">
                    Privacy mode
                  </span>
                  <button
                    type="button"
                    className="relative inline-flex h-5 w-9 lg:h-6 lg:w-11 items-center rounded-lg transition-colors duration-200 ease-in-out focus:outline-none bg-ivory-400"
                    aria-label="Toggle privacy mode"
                    aria-pressed="false"
                  >
                    <span className="sr-only">Enable privacy mode</span>
                    <span className="inline-block h-3.5 w-3.5 lg:h-4 lg:w-4 transform rounded-md bg-ivory-50 shadow-sm transition-transform duration-200 ease-in-out translate-x-0.5 lg:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
