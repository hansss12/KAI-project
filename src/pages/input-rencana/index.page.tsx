import { ColoredDots, EmptyState } from "../../assets"
import Button from "../../components/Button"
import SvgRecolor from "../../components/SVGRecolor"
import { menu1 } from "../../constant/icon"

export const inputRencanaPath = "/input-rencana"
const InputRencanaPage = () => {
  return (
    <div className="w-full bg-white rounded-2xl relative p-4">
      <img src={ColoredDots} className="w-[80px] absolute right-2 top-2" />
      <div className="flex justify-start items-center gap-2">
        <div className="p-2 rounded-full bg-gradient-to-b from-[#7446CD] to-[#D84186]">
          <SvgRecolor svg={menu1} color="#ffffff" height="20" width="20" />
        </div>
        <h1 className="text-xl font-bold">Input Rencana</h1>
      </div>
      <div className="flex flex-col items-center mt-5">
        <img src={EmptyState} className="w-[350px]" />
        <h3 className="text-lg font-semibold mt-4">Sync proyek tidak tersedia</h3>
        <p className="text-base">Klik tombol “Sync Rapid System” untuk menambahkan atau sync proyek</p>
        <div className="w-fit mt-4">
          <Button
            title="Sync Rapid System"
            type="submit"
            className="bg-[#7446CD] font-semibold "
          />
        </div>
      </div>
    </div>
  )

}

export default InputRencanaPage
