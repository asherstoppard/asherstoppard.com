import { PropsWithChildren } from 'react'
import { StyledComponentsRegistry } from '@/lib'
import { MainLayout } from '@/layouts'

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <head>
      <title>Asher Stoppard - Web App Consultant specialising in Javascript</title>
      <meta
        name="description"
        content="A software engineering consultant specialising in isomorphic javascript applications, centralisation and componentisation, architecture, CI/CD and testing."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <StyledComponentsRegistry>
        <MainLayout>{children}</MainLayout>
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout
