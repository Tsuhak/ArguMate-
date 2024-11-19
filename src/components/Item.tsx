import DeleteIcon from "../svgs/Icons"
import { ItemProps } from "../types/ArguMateTypes"
import IconButton from "./IconButton"

export default function Item({
  isClicked,
  handleClick,
  handleDeleted,
}: ItemProps) {
  return (
    <li
      handleClick={handleClick}
      className="flex items-center justify-between bg-zinc-800 border border-zinc-600 px-4 py-2 rounded-md cursor-pointer"
    >
      <p className={` ${isClicked ? "line-through" : ""} text-zinc-400`}>
        item
      </p>
      <IconButton handleDeleted={handleDeleted}>
        <DeleteIcon />
      </IconButton>
    </li>
  )
}
