import { FC } from 'react'
import 'material-icons/iconfont/material-icons.css'

export enum EIconType {
  standard = 'standard',
  outlined = 'outlined',
  round = 'round',
  sharp = 'sharp',
  twoTone = 'twoTone',
}

export interface IIconProps {
  iconType?: EIconType
  icon: string
}

export type TIconClassnameByIconType = {
  [key in EIconType]: string
}

const iconClassnameByIconType: TIconClassnameByIconType = {
  [EIconType.standard]: 'material-icons',
  [EIconType.outlined]: 'material-icons-outlined',
  [EIconType.round]: 'material-icons-round',
  [EIconType.sharp]: 'material-icons-sharp',
  [EIconType.twoTone]: 'material-icons-two-tone',
}

export const Icon: FC<IIconProps> = ({ iconType = EIconType.outlined, icon }) => (
  <span className={iconClassnameByIconType[iconType]}>{icon}</span>
)
