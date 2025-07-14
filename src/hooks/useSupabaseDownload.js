// src/hooks/useSupabaseDownload.js
import { useState } from "react";
import { supabase } from "../supabase";

export const useSupabaseDownload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadPdf = async (fileName, displayName) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.storage
        .from("pdfs")
        .createSignedUrl(fileName, 60); // URL válida por 60 segundos

      if (error) throw error;

      const link = document.createElement("a");
      link.href = data.signedUrl;
      link.download = displayName;
      link.click();
    } catch (error) {
      console.error("Error:", error);
      setError("Error al descargar el archivo");
    } finally {
      setLoading(false);
    }
  };

  return { downloadPdf, loading, error };
};
