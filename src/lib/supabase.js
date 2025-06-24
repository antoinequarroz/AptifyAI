import { createClient } from '@supabase/supabase-js';

// Remplace ces valeurs par celles de ton projet Supabase (onglet Project Settings > API)
const supabaseUrl = 'https://bkkhuzxspkpvobdwcnwt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJra2h1enhzcGtwdm9iZHdjbnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3ODAyODYsImV4cCI6MjA2NjM1NjI4Nn0.jY9tcuScVbZZhEit-OhCG-H6xFsi6ASvyFtQewX3U5w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
