// 获取用户链接元素
const userLinks = document.getElementById("user-links");
const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");

const SUPABASE_URL = "https://vnswcmkocaomjscnsdsl.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuc3djbWtvY2FvbWpzY25zZHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1NDExNTMsImV4cCI6MTk5NzExNzE1M30.mWRgT9fQ-dULZH9X4f9UfYlLRTvw07eHI3u-Ch0fLjs";

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 判断是否存在用户信息
if (localStorage.getItem("users")) {
  // 隐藏登录和注册链接
  loginLink.style.display = "none";
  registerLink.style.display = "none";

  const authToken = JSON.parse(
    localStorage.getItem("sb-vnswcmkocaomjscnsdsl-auth-token")
  );
  const userId = authToken.user.id;

  (async () => {
    // 查询数据库中的 user_info 表
    const { data: existingUserInfo, error } = await _supabase
      .from("user_info")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Error:", error.message);
      return;
    }

    // 创建用户链接元素
    const userLink = document.createElement("a");
    userLink.href = "/my_address.html";
    getUsers = JSON.parse(localStorage.getItem("users"));

    // 如果数据库中存在用户信息，则使用名称，否则使用电子邮件
    if (existingUserInfo.length > 0) {
      userLink.innerText = existingUserInfo[0].name;
    } else {
      userLink.innerText = getUsers.email;
    }

    // 添加用户链接元素
    userLinks.appendChild(userLink);
  })();
}

// 判断是否已登陆
// 获取当前页面的pathname
let pathname = window.location.pathname;

// 检查是否为login或register页面
if (
  pathname.indexOf("login.html") !== -1 ||
  pathname.indexOf("register.html") !== -1
) {
  // 检查localStorage是否存在用户登录信息
  if (localStorage.getItem("users")) {
    // 重定向到index.html页面
    window.location.href = "index.html";
  }
}

