import { useState } from "react"
import { ListPros } from "../types/ArguMateTypes"
import Form from "./Form"
import Item from "./Item"

export default function List({ title }: ListPros) {
  const [clicked, setClicked] = useState<number[]>([])

  const handleClick = (id: number) => {
  
  }

  return (
    <section className="max-w-xl w-full flex flex-col gap-8 border border-zinc-700 p-6 rounded-lg">
      <h2 className="text-2xl text-zinc-400">{title}</h2>
      <Form title={title} />

      <ul className="flex flex-col gap-5 mt-2">
        <Item isClicked={!setClicked} handleClick={handleClick} />
      </ul>
    </section>
  )
}
