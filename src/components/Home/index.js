import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Course from '../Course'

import {
  AppContainer,
  CourseContainer,
  CourseHeading,
  CoursesList,
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

class Home extends Component {
  state = {apiStatus: apiStatusConstants.success, courseList: []}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {method: 'GET'}
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.courses.map(eachCourse => ({
        id: eachCourse.id,
        logoUrl: eachCourse.logo_url,
        name: eachCourse.name,
      }))
      this.setState({
        courseList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryBtn = () => {
    this.getCourseDetails()
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
    const {courseList} = this.state
    return (
      <CourseContainer>
        <CourseHeading>Courses</CourseHeading>
        <CoursesList>
          {courseList.map(eachCourse => (
            <Course key={eachCourse.id} courseDetails={eachCourse} />
          ))}
        </CoursesList>
      </CourseContainer>
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

export default Home
