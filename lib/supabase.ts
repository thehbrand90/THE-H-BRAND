import { createClient } from '@supabase/supabase-js';

// Configuration for Supabase
const supabaseUrl = "https://exdhgwkudejynccxqdhm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4ZGhnd2t1ZGVqeW5jY3hxZGhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMDk2MjMsImV4cCI6MjA4MzU4NTYyM30.IbIxH-KOswcX3pGgpM8HEn0qZFTWQi_8p2YxHxzeBcY";

export const supabase = createClient(supabaseUrl, supabaseKey);