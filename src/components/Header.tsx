import { ChevronDown, MousePointer2 } from "lucide-react";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <section className="relative px-4 lg:px-6 py-[20vh] 2xl:py-64 flex flex-col justify-center">
      <div className="hidden xl:block absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        <div className="relative w-full h-full max-w-[96rem] mx-auto">
          <div
            className="absolute z-0 border-l-2 border-dashed border-gray-400"
            style={{
              bottom: "25%",
              left: "11.5%",
              height: "20%",
              transform: "rotate(4deg)",
              opacity: 0.4,
            }}
          />
          <div
            className="absolute z-0 border-l-2 border-dashed border-gray-400"
            style={{
              top: "20%",
              right: "15%",
              height: "15%",
              transform: "rotate(-23deg)",
              opacity: 0.4,
            }}
          />

          <div className="absolute z-10 bottom-[40%] left-[8%] w-[120px] h-[120px] rounded-full flex items-center justify-center bg-[rgb(255,236,179)] border border-black/[0.03] shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
            <h3 className="text-sm text-gray-800 font-medium text-charcoal-600 text-center px-5">
              Market research
            </h3>
          </div>

          <div className="absolute rounded-md z-10 bottom-[20%] left-[5%] w-[180px] bg-[rgb(250,250,247)] border border-black/[0.03] shadow-[0_2px_4px_rgba(0,0,0,0.03)]">
            <div className="p-3">
              <h4 className="font-medium text-charcoal-500 mb-2 text-xs">
                Sources
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <img
                    src="/icons/reddit.png"
                    alt="Reddit"
                    className="w-3 h-3"
                  />
                  <div className="flex-1">
                    <div className="h-2 bg-[#E3E3E1] rounded-full w-full" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/icons/twitter.png"
                    alt="Twitter"
                    className="w-3 h-3"
                  />
                  <div className="flex-1">
                    <div className="h-2 bg-[#E3E3E1] rounded-full w-3/4" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/icons/pubmet.png"
                    alt="Pubmet"
                    className="w-3 h-3"
                  />
                  <div className="flex-1">
                    <div className="h-2 bg-[#E3E3E1] rounded-full w-4/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute z-10 top-[16%] right-[12%]">
            <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center bg-[rgba(200,230,201,0.9)] border border-black/[0.03] shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
              <h3 className="text-sm text-gray-800 font-medium text-charcoal-600 text-center px-5">
                Build product
              </h3>
            </div>
          </div>

          <div className="absolute rounded-md z-10 top-[35%] right-[5%] w-[200px] bg-[rgb(250,250,247)] border border-black/[0.03] shadow-[0_2px_4px_rgba(0,0,0,0.03)]">
            <div className="p-3">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-charcoal-600 text-sm">
                  Development plan
                </h4>
                <ChevronDown className="w-3 h-3" />
              </div>
              <div>
                <div className="w-full bg-[#E3E3E1] rounded-full h-2">
                  <div className="bg-[#bc664f] h-2 rounded-full w-[20%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block absolute inset-0 overflow-hidden pointer-events-none opacity-80">
        <div className="relative w-full h-full max-w-[96rem] mx-auto">
          <div className="absolute animate-float-1 bottom-[37%] left-[8%]">
            <div className="relative">
              <MousePointer2 className="w-6 h-6 text-[#bc664f] -scale-x-100 fill-[#bc664f]" />
              <div className="absolute top-[18px] right-[18px] bg-[#bc664f] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                AI
              </div>
            </div>
          </div>

          <div className="absolute animate-cursor-right top-[28%] right-[12%]">
            <div className="relative">
              <MousePointer2 className="w-6 h-6 text-[#343434] fill-[#343434]" />
              <div className="absolute top-[18px] left-[18px] bg-[#343434] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                You
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-4 px-3 py-2 inline-flex items-center bg-[#363636] rounded-full shadow-md">
            <h1 className="text-[10px] lg:text-[12px] font-medium text-white leading-none">
              AI cofounder
            </h1>
          </div>
          <h2 className="max-w-xs lg:max-w-2xl mb-2 lg:mb-4 text-2xl lg:text-5xl font-bold text-[#363636]">
            Make something people actually want
          </h2>
          <p className="max-w-2xl mb-6 lg:mb-12 text-lg lg:text-xl text-[#363636]">
            Research and plan your product with AI
          </p>
          <SearchBox />
        </div>
      </div>
    </section>
  );
};
export default Header;
