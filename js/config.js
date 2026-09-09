// ==========================================
// PHONG NHAN THANH VUC
// SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL = "https://ewydvnjgjwfotaawkepl.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_H5HfvGakf7JrbQuiGiNsPQ_PCEt81d7";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
