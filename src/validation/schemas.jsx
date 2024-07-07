import * as Yup from "yup"
export const registerSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email format"),
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string().required("Confirm Password is required").oneOf([Yup.ref("password"), null], "Password and Confirm Password doesn't match"),
})
export const loginSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid email format"),
  password: Yup.string().required("Password is required")
})
export const resetPasswordLinkSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid email format")
})
export const resetPasswordSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "Password and Confirm Password doesn't match")
})

export const verifyEmailSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid email format"),
  otp: Yup.string().required("OTP is required")
})

export const changePasswordSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "Password and Confirm Password doesn't match")
})