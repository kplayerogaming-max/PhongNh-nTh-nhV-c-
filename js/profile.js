// ==========================================
// PHONG NHAN THANH VUC
// PROFILE
// ==========================================

document.addEventListener("DOMContentLoaded", async () => {
  const session = await requireAuth();

  if (!session) return;

  const user = session.user;

  const emailElement = document.getElementById("profileEmail");
  const nameElement = document.getElementById("profileName");
  const bioElement = document.getElementById("profileBio");

  if (emailElement) {
    emailElement.textContent = user.email || "";
  }

  if (nameElement) {
    nameElement.value =
      user.user_metadata?.display_name || "";
  }

  if (bioElement) {
    bioElement.value =
      user.user_metadata?.bio || "";
  }
});
