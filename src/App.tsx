import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen z-10 h-full bg-primary">
      <div
        className="absolute -top-3 min-h-screen h-full inset-x-0 z-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(200, 197, 190, 0.8) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
};
export default App;
