
export const goToHome = (history) => {
    history.push("/");
  };
  export const goToRegister = (history) => {
    history.push("/register");
  };
  export const goToLogin = (history) => {
    history.push("/login");
  };
  export const goToPost = (history, id) => {
    history.push(`/post/${id}`);
  };