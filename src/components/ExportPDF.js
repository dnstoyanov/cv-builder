import React from "react";
import html2pdf from "html2pdf.js";

import CVPage from "./CVPage";

const ExportPDF = () => {
  const handleExportPDF = () => {
    const element = document.getElementById("cv-page");

    html2pdf()
      .set({
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 10 },
        jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
      })
      .from(element)
      .save();
  };

  return (
    <div>
      <button onClick={handleExportPDF}>Export to PDF</button>
      <div id="cv-page">
        <CVPage />
      </div>
    </div>
  );
};

export default ExportPDF;
