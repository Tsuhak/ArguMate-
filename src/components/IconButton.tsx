import { IconButtonProps } from "../types/ArguMateTypes"

export default function IconButton({
  children,
  handleDeleted,
}: IconButtonProps) {
  return (
    <button
    handleDeleted={handleDeleted}
      className=" p-2 border border-zinc-600 rounded hover:bg-zinc-900 transition"
    >
      {children}
    </button>
  )
}
