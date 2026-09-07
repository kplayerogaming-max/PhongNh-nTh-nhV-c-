// ==========================================
// PHONG NHAN THANH VUC
// GROUPS
// ==========================================

document.addEventListener("DOMContentLoaded", async () => {
  const session = await requireAuth();

  if (!session) return;

  console.log("Groups đã sẵn sàng cho:", session.user.email);
});
