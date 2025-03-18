import { MouseEventHandler } from "react"
import { Loading, LoadingBlack } from "../assets"

interface ButtonProps {
  title: string
  loading?: boolean
  disabled?: boolean
  className: string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  type: "submit" | "reset" | "button"
  theme?: "dark" | "light"
}
const Button: React.FC<ButtonProps> = ({ className, title, disabled, loading = false, onClick, type = "button", theme = "light" }) => {
  const disabledStyle = "bg-[#929292] hover:bg-neutral-500"
  return (
    <button
      onClick={disabled ? undefined : onClick}
      type={type}
      className={`w-full py-2 px-4 rounded-md flex justify-center hover:opacity-90 ${disabled ? disabledStyle : className} ${theme === "light" ? "text-white" : "text-black"}`}
    >
      {loading ?
        <img src={theme === "light" ? Loading : LoadingBlack} alt="loading" className="w-6 h-6" />
        :
        title
      }
    </button>
  )
}

export default Button