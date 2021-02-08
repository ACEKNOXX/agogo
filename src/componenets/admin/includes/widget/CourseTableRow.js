import React from 'react'
import { Link} from 'react-router-dom'
import DeleteCourse from './../../modals/DeleteCourse'
import Button from '@material-ui/core/Button';

export default function CourseTableRow(props) {

    const corse = props.course
    const course = corse.data()

    console.log(course)
    return (

            <tr >
                <td>
                    <p>
                    <label>
                        <DeleteCourse courseId={corse.id}/>
                    </label>
                    </p>
                </td>
                <td><b>{course.courseTitle}</b></td>
                <td>{course.courseShortDescription.substring(0,30)}...</td>
                <td>{course.courseTutor}</td>
                <td>
                    <span>
                        <Button className="grey lighten-5" style={{margin:"0px 2px"}}>
                            <Link to={`/adminAddCourseItem/${corse.id}`} className="red btn-flat transparent">
                                {/* <img src="../assets/Aurora_icons/edit icon.svg" alt="" /> */}
                                <i className="material-icons">add_circle</i>
                            </Link>
                        </Button>
                        <Button className="grey lighten-5" style={{margin:"0px 2px"}}>
                            <Link to={`/adminAddCourseItem/${corse.id}`} className=" btn-flat">
                                <img src="../assets/Aurora_icons/edit icon.svg" alt="" />
                            </Link>
                        </Button>
                        
                    </span>
                </td>
            </tr>
           
    )
}
