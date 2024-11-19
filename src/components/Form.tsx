import { useState } from "react"
import { FormPros } from "../types/ArguMateTypes"

export default function Form({ title }: FormPros) {
  const [inputValue, setInputValue] = useState("")

  return (
    <form className=" flex items-center gap-4">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder={` Ajouter un ${
          title.toLowerCase().includes("pours") ? "pours" : "contre"
        }...`}
        className="flex-1 px-4 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-400"
      />
      <button
        // onClick={}
        type="submit"
        className="text-zinc-400 bg-zinc-800 border border-zinc-700 px-4 py-1 rounded-md hover:bg-zinc-900 transition"
      >
        Ajouter
      </button>
    </form>
  )
}
