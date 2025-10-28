import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-[#F2F1EC] h-screen p-4">
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
};
export default App;
