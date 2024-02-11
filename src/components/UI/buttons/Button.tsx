import { FC, forwardRef } from 'react'
import { motion } from 'framer-motion'

import cn from './Button.module.scss'
import { ButtonProps } from './buttonType'
import { spritePath } from '../../../helpers/pathIcons'
import clsx from 'clsx'

const Button: FC<ButtonProps> = forwardRef(
  ({ text, type, size, icon, className }, ref: React.ForwardedRef<HTMLButtonElement>) => {
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

    const iconStyles = clsx(
      cn.icon,
      {
        primary: cn['primary-i'],
        secondary: cn['secondary-i'],
      }[type]
    )

    return (
      <button className={buttonStyles} ref={ref}>
        {icon && (
          <svg className={iconStyles}>
            <use href={`${spritePath.buttonIcons}#${icon}`}></use>
          </svg>
        )}
        {text}
      </button>
    )
  }
)

export default Button
export const MButton = motion(Button)
