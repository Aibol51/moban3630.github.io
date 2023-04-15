// 获取用户链接元素
const userLinks = document.getElementById("user-links");
const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");

// 判断是否存在用户信息
if (localStorage.getItem("users")) {
  // 隐藏登录和注册链接
  loginLink.style.display = "none";
  registerLink.style.display = "none";

  // 创建用户链接元素
  const userLink = document.createElement("a");
  userLink.href = "/users.html";
  getUsers = JSON.parse(localStorage.getItem("users"));
  userLink.innerText = getUsers.email

  // 添加用户链接元素
  userLinks.appendChild(userLink);
}

// 判断是否已登陆
// 获取当前页面的pathname
let pathname = window.location.pathname;

// 检查是否为login或register页面
if (pathname.indexOf("login.html") !== -1 || pathname.indexOf("register.html") !== -1) {
  // 检查localStorage是否存在用户登录信息
  if (localStorage.getItem("users")) {
    // 重定向到index.html页面
    window.location.href = "index.html";
  }
}
