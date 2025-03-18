"use client"

import { Navigate } from "react-router";
import { useAppSelector } from "../../_store";
import { LoginBG, LoginDots1, LoginDots2 } from "../../assets";
import Button from "../../components/Button";
import { inputRencanaPath } from "../input-rencana/index.page";
import useLogin from "./useLogin.hooks";

export const LoginPath = '/login';
const LoginPage = () => {
  const { email, password, handleEmailChange, handlePasswordChange, handleSubmit, errorMessage, isLoading } = useLogin();
  const { accessToken } = useAppSelector(state => state.auth)
  if (accessToken) return <Navigate to={inputRencanaPath} replace />

  return (
    <div className="h-screen w-full flex justify-center bg-gradient-to-b from-[#7446CD] to-[#D84186] items-center no-scrollbar">
      <img src={LoginDots1} alt="login-dots-1" className="absolute left-10 top-10 w-[10vw]" />
      <div className="flex flex-col my-[20vh]">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-2xl font-extralight">Selamat Datang di</h1>
          <div className="grid grid-cols-3 items-center gap-4 mx-4 mt-2">
            <div className="w-full h-[1px] bg-white"></div>
            <div className="flex justify-center">
              <h1 className="text-white text-3xl font-[700]">E-Monitoring IBE Dashboard</h1>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between bg-white p-8 rounded-3xl shadow-md h-full items-center mt-8 relative z-10">
          <div className="flex flex-col px-10">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold mb-4">LOGIN</h1>
              <h2 className="text-base font-normal mb-4 text-[#828282]">Silakan masukkan NIPP dan Password Anda</h2>
              {errorMessage.length > 0 ?
                <div className="flex w-full border-2 border-[#CF0606] rounded-lg px-4 py-2 bg-[#FFE4E4] mb-4">
                  <p className="text-sm font-normal text-[#CF0606]">{errorMessage}</p>
                </div>
                : null}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nipp" className="block text-sm font-medium text-black">
                  NIPP
                </label>
                <input
                  type="nipp"
                  id="nipp"
                  value={email}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none caret-amber-400"
                  required
                  placeholder="Masukkan NIPP"
                  autoComplete="nipp"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-none caret-amber-400"
                  required
                  autoComplete="password"
                  placeholder="Masukkan Password"
                />
              </div>
              <Button
                title="LOGIN"
                type="submit"
                className="bg-[#7446CD] font-semibold"
                disabled={email === "" || password === ""}
                loading={isLoading}
              />
            </form>
          </div>
          <div className="flex h-full">
            <img src={LoginBG} alt="login-bg" className="rounded-2xl w-[50vw] h-full" />
          </div>
        </div>
        <div className="relative">
          <img src={LoginDots2} alt="login-dots-1" className="absolute -right-10 -top-16 w-[10vw]" />
        </div>
        <div className="flex flex-col items-center mt-8">
          <h1 className="text-white text-2xl font-extralight">PT Kereta Api indonesia (Persero)</h1>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
