import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { StyledComponentsRegistry } from '@/lib'
import { MainLayout } from '@/layouts'

const outfitFont = Outfit({
  weight: ['200', '300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Asher Stoppard',
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className={outfitFont.className}>
      <StyledComponentsRegistry>
        <MainLayout>{children}</MainLayout>
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout
