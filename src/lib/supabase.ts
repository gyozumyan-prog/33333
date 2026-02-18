import { createClient } from '@supabase/supabase-js';

const supabaseUrl = '__SUPABASE_URL__';
const supabaseAnonKey = '__SUPABASE_ANON_KEY__';

export const supabase = (supabaseUrl && supabaseUrl !== '__SUPABASE_URL__')
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
