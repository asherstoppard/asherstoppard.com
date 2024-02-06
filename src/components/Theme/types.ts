export interface IThemeColors {
  brandPrimary: string
  brandSecondary: string
  dark: string
  light: string
  link: string
}

export interface ITypography {
  fontFamily: string
}

export interface ITheme {
  colors: IThemeColors
  base: ITypography
}
