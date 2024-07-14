import * as Yup from "yup";

export const registerSchemas = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is not valid"),
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string()
    .required()
    .oneOf(
      [Yup.ref("password"), null],
      "Password and Confirm Password does not match"
    ),
});

export const loginSchemas = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});
