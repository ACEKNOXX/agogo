import React from 'react'
import { Link} from 'react-router-dom'
// import DeleteCourse from './../../modals/DeleteCourse'
import DeleteArticle from './../../modals/DeleteArticle'
import Button from '@material-ui/core/Button';

export default function BlogTableRow(props) {

    const corse = props.article
    const article = corse.data()

    console.log(article)
    return (

            <tr >
                <td>
                    <p>
                    <label>
                        <DeleteArticle courseId={corse.id}/>
                    </label>
                    </p>
                </td>
                <td><b>{article.title}</b></td>
                <td>{article.bodyText.substring(0,50)}...</td>
                <td>{article.author}</td>
                <td>{article.status}</td>
                <td>
                    <span>
                        <Button className="grey lighten-5" style={{margin:"0px 2px"}}>
                            <Link to={`/blogArticle/${corse.id}`} className=" btn-flat">
                                <i className="material-icons">language</i>
                            </Link>
                        </Button>
                        
                    </span>
                </td>
            </tr>
           
    )
}
