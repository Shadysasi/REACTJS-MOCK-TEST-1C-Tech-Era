import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'

import {
  AppContainer,
  CourseItemContainer,
  CourseImgContainer,
  CourseItemImg,
  CourseDescription,
  CourseItemHeading,
  Description,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseItemDetails extends Component {
  state = {apiStatus: apiStatusConstants.success, courseItemDetails: {}}

  componentDidMount() {
    this.getCourseItemDetails()
  }

  getCourseItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {method: 'GET'}
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        description: data.course_details.description,
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
      }
      this.setState({
        courseItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryBtn = () => {
    this.getCourseItemDetails()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
        We cannot seem to find the page you looking for.
      </FailureText>
      <RetryBtn type="button" onClick={this.onClickRetryBtn}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  renderSuccessView = () => {
    const {courseItemDetails} = this.state
    const {description, name, imageUrl} = courseItemDetails
    return (
      <CourseItemContainer>
        <CourseImgContainer>
          <CourseItemImg src={imageUrl} alt={name} />
        </CourseImgContainer>
        <CourseDescription>
          <CourseItemHeading>{name}</CourseItemHeading>
          <Description>{description}</Description>
        </CourseDescription>
      </CourseItemContainer>
    )
  }

  renderCourseStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <Header />

        {this.renderCourseStatus()}
      </AppContainer>
    )
  }
}

export default CourseItemDetails
