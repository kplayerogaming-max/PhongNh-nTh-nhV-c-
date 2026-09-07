// ==========================================
// PHONG NHAN THANH VUC
// APPLICATION
// ==========================================

document.addEventListener("DOMContentLoaded", async () => {
  const session = await requireAuth();

  if (!session) return;

  const emailElement = document.getElementById("userEmail");

  if (emailElement) {
    emailElement.textContent = session.user.email;
  }

  const statusElement = document.getElementById("onlineStatus");

  if (statusElement) {
    statusElement.textContent = "Đang kết nối";
  }
});
