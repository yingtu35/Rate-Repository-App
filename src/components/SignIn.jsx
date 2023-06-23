// Formik x React Native example
import React from "react"
import { Pressable, View, Text, StyleSheet } from "react-native"
import { useNavigate } from "react-router-native"
import { Formik } from "formik"
import FormikTextInput from "./FormikTextInput"
import theme from "../theme"
import * as yup from "yup"
import useSignIn from "../hooks/useSignIn"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
})

const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username should be at least 4 characters")
    .required("Username is required"),
  password: yup.string().required("Password is required"),
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={{ color: theme.colors.white }}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export const SignIn = () => {
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    password: "",
  }
  const [signIn] = useSignIn()
  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      const { data } = await signIn({ username, password })
      // console.log(data)
      // TODO: navigate user to the repository list
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignInSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
