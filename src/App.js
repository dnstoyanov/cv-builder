import { useRef } from "react";
import "./App.css";
import CVPage from "./components/CVPage";
import { useReactToPrint } from "react-to-print";

function App() {
  const cvRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* The component to be printed */}
        <div ref={cvRef}>
          <CVPage />
        </div>
        {/* Trigger button for printing */}
        <button onClick={handlePrint}>Print CV</button>
      </header>
    </div>
  );
}

export default App;
