// ==========================================
// PHONG NHÂN THÁNH VỰC
// SUPABASE CONFIGURATION
// ==========================================

// Supabase Project URL
const SUPABASE_URL = "https://ewydvnjgjwfotaawkepl.supabase.co"

// Supabase Publishable Key
const SUPABASE_PUBLISHABLE_KEY =sb_publishable_H5HfvGakf7JrbQuiGiNsPQ_PCEt81d7

// Tạo Supabase client
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
