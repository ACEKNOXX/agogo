import React from 'react'
import { Link} from 'react-router-dom'
import DeleteCourse from './../../modals/DeleteCourse'
import Button from '@material-ui/core/Button';

export default function ItemListingWidget(props) {
    const corseItm = props.course
    const course = corseItm.data()

    console.log(course)
    return (
        <tr >
                <td>
                    <p>
                    <label>
                        <DeleteCourse courseId={corseItm.id}/>
                    </label>
                    </p>
                </td>
                <td><b>{course.lessonTitle}</b></td>
                <td>{course.courseShortDescription.substring(0,30)}...</td>
                <td>{course.courseDuration}</td>
                <td>
                    <span>
                       
                        <Button className="grey lighten-5" style={{margin:"0px 2px"}}>
                            <Link to={`/adminSingleCourseItem/${corseItm.id}`} className=" btn-flat">
                                <i className="material-icons">
                                    videocam
                                </i>
                            </Link>
                        </Button>
                        
                    </span>
                </td>
            </tr>
           
    )
}
