// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uiuyvcbhvpnzcvrhwsmc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpdXl2Y2JodnBuemN2cmh3c21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MzQ4MTMsImV4cCI6MjA2ODExMDgxM30.029WRl2zhk0c1RtUMtitXpBQVNY7sopu7_Rv9PhyIis";

export const supabase = createClient(supabaseUrl, supabaseKey);
