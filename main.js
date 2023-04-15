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
  userLink.href = "/user.html";
  getUsers = JSON.parse(localStorage.getItem("users"));
  userLink.innerText = getUsers.email

  // 添加用户链接元素
  userLinks.appendChild(userLink);
}
