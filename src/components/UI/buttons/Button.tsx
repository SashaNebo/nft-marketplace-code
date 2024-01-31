import { FC } from 'react'
import cn from './Button.module.scss'
import { ButtonProps } from './buttonType'
import { spritePath } from '../../../helpers/pathIcons'
import clsx from 'clsx'

const Button: FC<ButtonProps> = ({ text, type, size, icon, className }) => {
  const buttonStyles = clsx(
    className,
    cn.button,
    {
      primary: cn.primary,
      secondary: cn.secondary,
    }[type],

    {
      xl: cn.xl,
      lg: cn.lg,
      md: cn.md,
    }[size]
  )

  return (
    <button className={buttonStyles}>
      {icon && (
        <svg className={cn.icon}>
          <use href={`${spritePath.buttonIcons}#${icon}`}></use>
        </svg>
      )}
      {text}
    </button>
  )
}

export default Button
