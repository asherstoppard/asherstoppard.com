import { FC } from 'react'
import { SCallToAction, SCallToActionContainer } from './CallToAction.styled'

export const CallToAction: FC = () => (
  <SCallToActionContainer>
    <SCallToAction>
      <h2>
        Javascript applications seen by over <strong>785,261,292 Million</strong> people a year.
      </h2>
      <p>
        An engineer you can trust to architect, manage and deliver your next software application.
      </p>
    </SCallToAction>
  </SCallToActionContainer>
)
