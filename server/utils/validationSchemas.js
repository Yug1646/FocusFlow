export const createUserValidationSchema = {
  userName: {
    isLength: {
      options: {
        min: 3,
        max: 32,
      },
      errorMessage:
        "Username should be atleast 3 characters and maximum of 32 characters",
    },
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
    isString: {
      errorMessage: "Username should be a string",
    },
  },
  password: {
    notEmpty: true,
  },
};
