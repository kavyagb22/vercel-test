import { maxAge, ERROR } from "./constants";

const createError = (message = "something went wrong.") => {
  return { ...ERROR, message };
};

export { createError };
