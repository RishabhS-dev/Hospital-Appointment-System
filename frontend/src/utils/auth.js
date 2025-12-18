// Save token & role after login
export const setAuth = (token, role) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
};

// Get JWT token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Get logged-in role
export const getRole = () => {
  return localStorage.getItem("role");
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

// Logout user
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "/";
};
