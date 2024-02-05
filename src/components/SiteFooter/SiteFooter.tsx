import { SSiteFooter } from './SiteFooter.styled'
import { Container } from '../Container'

export const SiteFooter = () => (
  <SSiteFooter>
    <Container>
      <p>
        &copy; <strong>Asher Stoppard Limited</strong> {new Date().getFullYear()}
      </p>
      <p>
        <small>
          Asher Stoppard Limited, a company registered in England and Wales. Registered Number:
          1033320. VAT Number: GB 248168875.
          <br />
          Registered office: 18 Wellingtonia Crescent, Edwalton, Nottingham, NG12 4GU.
        </small>
      </p>
    </Container>
  </SSiteFooter>
)
