import { useEffect, useState } from "react";
import { useAppDispatch } from "../../_store";
import { saveTokenAuth } from "../../_store/auth";
import { LoginI, LoginReqI } from "../../interfaces/login";
import { errorHandler } from "../../services/errorHandler";
import { useLoginMutation } from "../../services/modules/auth";

const useLogin = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("")
  const handleLogin = async (payload: LoginReqI) => {
    try {
      const res = await login(payload).unwrap()
      if (res.success) {
        dispatch(saveTokenAuth(res))
      } else {
        setErrorMessage(res.error.message)
      }
    } catch (error) {
      const errorApi = error as { status: number, data: LoginI }
      if (errorApi.data.success === false) {
        setErrorMessage(errorApi.data.error.message)
      } else {
        errorHandler(error)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleLogin({ nipp: email, password, rememberMe: false })
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (errorMessage.length > 0) {
      setErrorMessage("")
    }
  }, [email, password])

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    errorMessage,
    isLoading
  }
}

export default useLogin;