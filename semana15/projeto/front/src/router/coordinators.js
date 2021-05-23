export const goToHome = (history) => {
    history.push("/");
  };
  export const goToUser = (history, cpf) => {
    history.push(`user/${cpf}`);
  };