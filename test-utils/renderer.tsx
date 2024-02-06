import React, { FC, PropsWithChildren } from 'react'
import { Theme } from '@/components'
import { render as rtlRender } from '@testing-library/react'

function render(ui: React.ReactElement) {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => <Theme>{children}</Theme>

  return rtlRender(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react'
export { render }
