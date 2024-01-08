import Header from '../Header'
import {
  AppContainer,
  NotFoundContainer,
  NotFoundCard,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <AppContainer>
    <Header />
    <NotFoundContainer className="notFound">
      <NotFoundCard>
        <NotFoundImg
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
        />
      </NotFoundCard>
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundPara>
        We are sorry, the page you requested could not be found.
      </NotFoundPara>
    </NotFoundContainer>
  </AppContainer>
)

export default NotFound
