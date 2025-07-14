import React from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

const Home = () => {
  return (
    <PageTemplate
      title="Bienvenido"
      description="Esta es la página principal de nuestra aplicación. Aquí puedes descargar el manual de usuario."
      pdfUrl="https://cdn.jsdelivr.net/gh/Facurv8714/pdf-files-storage/pdfs/1.pdf"
      fileName="manual-usuario.pdf"
    />
  );
};

export default Home;
