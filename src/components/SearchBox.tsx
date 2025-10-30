import { ArrowUp, HatGlasses, Lightbulb } from "lucide-react";
import { useState } from "react";

const SearchBox = () => {
  const [isPrivacyMode, setIsPrivacyMode] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const togglePrivacyMode = () => {
    setIsPrivacyMode(!isPrivacyMode);
    if (isPrivacyMode) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  return (
    <div className="max-w-3xl w-full">
      <form className="relative mb-4 p-3 bg-[#FAFAF7] border rounded-3xl shadow-md transition-all duration-200 ease-in-out border-ivory-300 hover:border-charcoal-150">
        <textarea
          className="w-full pr-12 rounded-md px-2 py-2 text-base text-charcoal-500 bg-transparent placeholder:text-charcoal-250 focus:outline-none resize-none overflow-y-auto min-h-[110px] max-h-[192px] h-[110px]"
          placeholder="I want to create a platform for remote teams.."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button
          type="submit"
          className={`absolute bottom-3 right-3 w-[34px] h-[34px] flex items-center justify-center text-white rounded-[12px] transition-all duration-200 ease-in-out ${
            textValue.trim()
              ? "bg-[#B85C44] cursor-pointer"
              : "bg-[#D9AB9D] cursor-default"
          }`}
          disabled={!textValue.trim()}
        >
          <ArrowUp className="w-[1.15rem] stroke-3" />
        </button>
      </form>

      <div className="flex justify-between items-center">
        <button
          type="button"
          className="flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 bg-[#F8F7F4] hover:bg-ivory-100 border border-ivory-300 hover:border-charcoal-150 text-charcoal-450 rounded-full shadow-sm transition-all duration-200 ease-in-out z-10"
        >
          <Lightbulb className="w-4 h-4" />
          <span className="text-xs lg:text-sm font-medium">
            Brainstorm ideas
          </span>
        </button>

        <div className="relative">
          <div
            className="flex items-center gap-1.5 lg:gap-2"
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
          >
            <HatGlasses
              className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-colors duration-200 ${
                isPrivacyMode ? "text-[#856ED8]" : "text-[#404040]"
              }`}
            />
            <span
              className={`mr-0.5 lg:mr-1 text-xs lg:text-sm font-medium transition-colors duration-200 ${
                isPrivacyMode ? "text-[#856ED8]" : "text-[#404040]"
              }`}
            >
              Privacy mode
            </span>
            <button
              type="button"
              onClick={togglePrivacyMode}
              className={`relative inline-flex h-5 w-9 lg:h-6 lg:w-11 items-center rounded-lg transition-colors duration-200 ease-in-out focus:outline-none ${
                isPrivacyMode ? "bg-[#856ED8]" : "bg-[#D1CEC0]"
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 lg:h-4 lg:w-4 transform rounded-md bg-[#FAFAF7] shadow-sm transition-transform duration-200 ease-in-out ${
                  isPrivacyMode
                    ? "translate-x-4 lg:translate-x-6"
                    : "translate-x-0.5 lg:translate-x-1"
                }`}
              />
            </button>
          </div>

          {showPopup && (
            <div className="hidden lg:block text-sm absolute top-full mt-2 text-[15px] -left-11 bg-charcoal-500 text-[#404040] bg-[#FAFAF7] px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
              Your project won't be used for training
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
