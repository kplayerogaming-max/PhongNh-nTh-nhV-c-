// ==========================================
// PHONG NHAN THANH VUC
// CHAT
// ==========================================

document.addEventListener("DOMContentLoaded", async () => {
  const session = await requireAuth();

  if (!session) return;

  console.log("Chat đã sẵn sàng cho:", session.user.email);
});
