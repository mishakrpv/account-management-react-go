import { getCookie, setCookie, deleteCookie } from "./cookie";

export const logIn = async () => {
  try {
    const response = await axios.post(
      API_BASE_URL + `login?timestamp=${new Date().getTime()}`
    );
    token.set(response.data.result.token);
    return successHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const logoOut = () => {
  token.remove();
  storePersist.clear();
};
