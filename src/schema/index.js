import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export const signUpSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  fullName: yup.string().required(),
  confirmPassword: yup.string().when("password", (password, schema) => {
    return password && password.length > 0
      ? schema
          .required("Confirm Password is required")
          .oneOf([yup.ref("password")], "Passwords must match")
      : schema.notRequired();
  }),
});
