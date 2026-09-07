// ==========================================
// PHONG NHAN THANH VUC
// AUTHENTICATION
// ==========================================

async function getSession() {
  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    console.error("Lỗi lấy session:", error);
    return null;
  }

  return data.session;
}


async function signIn(email, password) {
  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

  if (error) {
    throw error;
  }

  return data;
}


async function signUp(email, password, displayName) {
  const { data, error } =
    await supabaseClient.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          display_name: displayName
        },
        emailRedirectTo: `${window.location.origin}/index.html`
      }
    });

  if (error) {
    throw error;
  }

  return data;
}


async function signOut() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error("Lỗi đăng xuất:", error);
    return;
  }

  window.location.href = "đăng nhập.html";
}


async function requireAuth() {
  const session = await getSession();

  if (!session) {
    window.location.href = "đăng nhập.html";
    return null;
  }

  return session;
}


document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", signOut);
  }
});
