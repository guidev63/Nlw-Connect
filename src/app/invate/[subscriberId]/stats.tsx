import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

export function Stats(){
  return(
    <div className="grid gap-3 md:grid-cols-3">

    <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
      <span className="text-2xl  font-heading font-semibold text-gray-200">1042</span>
      <span className="text-gray-300 text-sm leading-none text-center">
        Acessos ao link
      </span>
      <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
    </div>


    <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
      <span className="text-2xl  font-heading font-semibold text-gray-200">
        1042</span>
      <span className="text-gray-300 text-sm leading-none text-center">
        Inscrições Feitas
      </span>
      <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />

    </div>

    <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
      <span className="text-2xl  font-heading font-semibold text-gray-200">
        3º</span>
      <span className="text-gray-300 text-sm leading-none text-center">
        Posição no Ranking</span>
      <Medal className="size-5 text-purple absolute top-3 left-3" />
    </div>
  </div>
  )
}