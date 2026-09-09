// ==========================================
// THÁNH VỰC - DASHBOARD
// ==========================================

document.addEventListener("DOMContentLoaded", async () => {

    console.log("Dashboard đang khởi động...");

    // Kiểm tra Supabase
    if (!window.supabaseClient) {
        console.error("Không tìm thấy Supabase Client!");
        return;
    }

    // Kiểm tra tài khoản đăng nhập
    const {
        data: { user },
        error
    } = await window.supabaseClient.auth.getUser();

    if (error) {
        console.error("Lỗi kiểm tra tài khoản:", error);
        return;
    }

    // Chưa đăng nhập → quay về Login
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    console.log("Đã đăng nhập:", user.email);

    // ==============================
    // LẤY PROFILE
    // ==============================

    const {
        data: profile,
        error: profileError
    } = await window.supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (profileError) {
        console.warn("Không lấy được Profile:", profileError);
    }

    // Hiển thị tên
    const userName =
        profile?.username ||
        profile?.name ||
        user.email;

    const nameElement =
        document.getElementById("user-name");

    if (nameElement) {
        nameElement.textContent = userName;
    }

});
