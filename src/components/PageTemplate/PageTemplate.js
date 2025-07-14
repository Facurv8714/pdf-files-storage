import React from "react";

const PageTemplate = ({ title, description, pdfUrl, fileName }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar el PDF:", error);
      alert("Error al descargar el archivo");
    }
  };

  return (
    <div className="page-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="download-btn" onClick={handleDownload}>
        📄 Descargar PDF
      </button>
    </div>
  );
};

export default PageTemplate;
