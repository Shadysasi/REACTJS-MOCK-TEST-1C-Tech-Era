import {Component} from 'react'
import {Link} from 'react-router-dom'
import {CourseListItem, CourseImg, CourseText} from './styledComponents'

class Course extends Component {
  render() {
    const {courseDetails} = this.props
    const {id, logoUrl, name} = courseDetails
    return (
      <Link to={`/courses/${id}`}>
        <CourseListItem>
          <CourseImg src={logoUrl} alt={name} />
          <CourseText>{name}</CourseText>
        </CourseListItem>
      </Link>
    )
  }
}
export default Course
