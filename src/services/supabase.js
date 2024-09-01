import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nrkvbderdraauxhtzsqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ya3ZiZGVyZHJhYXV4aHR6c3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NzA2OTIsImV4cCI6MjA0MDI0NjY5Mn0.OomRvYlwUMFdKjkfnC1Px7E9z_tFQfDNkdGJ93X392c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
