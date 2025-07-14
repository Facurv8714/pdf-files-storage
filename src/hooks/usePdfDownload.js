// hooks/usePdfDownload.js
import { useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export const usePdfDownload = () => {
  const [loading, setLoading] = useState(false);

  const downloadPdf = async (fileName, displayName) => {
    setLoading(true);
    try {
      const pdfRef = ref(storage, `pdfs/${fileName}`);
      const url = await getDownloadURL(pdfRef);

      const link = document.createElement("a");
      link.href = url;
      link.download = displayName;
      link.click();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { downloadPdf, loading };
};
