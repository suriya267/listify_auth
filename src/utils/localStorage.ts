const setAuthToken = (token: string) => {
  localStorage.setItem("token", token);
};

const getAuthToken = () => {
  return localStorage.getItem("token");
};

const clearAuthToken = () => {
  localStorage.clear();
};

const setRememberEmail = (email: string) => {
  localStorage.setItem("rememberEmail", email);
};

const getRememberEmail = () => {
  return localStorage.getItem("rememberEmail");
};

const clearRememberEmail = () => {
  return localStorage.removeItem("rememberEmail");
};

export {
  setAuthToken,
  getAuthToken,
  clearAuthToken,
  setRememberEmail,
  getRememberEmail,
  clearRememberEmail,
};
