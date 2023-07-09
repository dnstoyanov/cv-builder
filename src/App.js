import "./App.css";
import CVPage from "./components/CVPage";
import ExportPDF from "./components/ExportPDF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CVPage />
        {/* <ExportPDF /> */}
      </header>
    </div>
  );
}

export default App;
