import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://caumtcwxdlruwrevshgp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhdW10Y3d4ZGxydXdyZXZzaGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMTMwNzIsImV4cCI6MjA1ODU4OTA3Mn0.ruuvMuTdObkoXs2LEiC0fxsuj0GdfAAxfmcb7DA43Qs';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
