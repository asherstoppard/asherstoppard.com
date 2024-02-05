import { FC } from 'react'
import { Icon } from '@/components'
import { Button } from '../Button'
import { SButtonContainer, SSplashBackground, SSplashContent, SSplashImage } from './Splash.styled'

export interface ISplashProps {
  message: string
}

export const Splash: FC = () => (
  <SSplashBackground>
    <SSplashContent>
      <h1>
        <strong>Asher Stoppard.</strong> Javascript Consultant.
      </h1>
      <p>
        I’m a software engineering consultant specialising in isomorphic javascript applications,
        centralisation, open-source, javascript components, architecture, CI/CD and testing;
        Building scalable, performant, engaging solutions seen by over <strong>785,261,292</strong>{' '}
        people a year.
      </p>
      <SButtonContainer>
        <Button
          href="/documents/Asher%20Stoppard%20-%20CV%20-%202024.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="arrow_downward" /> Download My CV
        </Button>
      </SButtonContainer>
    </SSplashContent>
    <SSplashImage src="images/splash-image.png" alt="" />
  </SSplashBackground>
)
