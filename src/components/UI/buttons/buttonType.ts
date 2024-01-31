export type ButtonProps = {
  type: ButtonType
  size: ButtonSize
  text: string
  icon?: string
  className?: string
  onClick?: () => void
}

type ButtonType = 'primary' | 'secondary'
type ButtonSize = 'xl' | 'lg' | 'md'
