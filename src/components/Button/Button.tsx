import React, { FC, ButtonHTMLAttributes, PropsWithChildren, AnchorHTMLAttributes } from 'react'
import { SButton } from './Button.styled'

type TButtonType = 'submit' | 'button' | 'reset'

interface IButtonProps {
  type?: TButtonType
  onClick?: () => void
  href?: string
}

export type TButtonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<IButtonProps>
export type TButtonAProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  PropsWithChildren<IButtonProps>

export const Button: FC<TButtonButtonProps | TButtonAProps> = ({
  children,
  onClick,
  href,
  type,
  ...args
}) => {
  const isButton = !href

  return (
    <SButton
      as={isButton ? 'button' : 'a'}
      href={href}
      type={isButton ? type : undefined}
      onClick={onClick}
      {...args}
    >
      {children}
    </SButton>
  )
}
