export type ListPros = {
  title: string
}

export type FormPros = {
  title: string
}

export type ItemProps = {
  isClicked: boolean
  handleClick: () => void
}

export type IconButtonProps = {
  children: React.ReactNode
  handleDeleted: () => void
}
