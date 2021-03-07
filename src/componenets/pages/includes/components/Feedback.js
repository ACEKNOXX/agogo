import React from 'react'

export default function Feedback() {
    var items = [
        {
            name: "Georgie O.",
            description: "Thank you KWO for all your work with us ! 🙏🏾 Thank you all my fellow jade aurora tribers for making this work seamlessly 🙏🏾."
        },
        {
            name: "Esther Kalu.",
            description: 'Thank you so much mama,  this savings group really helped us this year.I am extremely grateful and we wish we do more next year.'
        }
    ]

    return (
        <div className=" pt-50 full-w" id="feedbacks">
            <div className="row hide-on-med-and-down">
                <div className="pb-25 center section-heading student-comment-heading " id="student-heading">
                    <h4 className="primary-color">With <span className="red-text"> ❤ </span>from Aurora tribers</h4>
                </div>
            </div>
            <div className="row show-on-medium-and-down hide-on-med-and-up">
                <div className="col s12 pb-25 center section-heading student-comment-heading " >
                    <h4 className="primary-color">With <span className="red-text"> ❤ </span>from Aurora tribers</h4>
                </div>
            </div>

            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            

        </div>
    )
}

function Item(props)
{
    return (
        <div className="center">
            
            {/* <img src={props.item.url} width="100%"  alt=""/>
            <h4>{props.item.title}</h4> */}
            {/* <p>{props.item.description}</p> */}
            <div className=" row mb-25  container" id="feedback-tab" >
                <div className="col  s12 center m3">
                    <div className="img-avatar" >
                        <img className="" src="assets/Aurora_images/Ellipse 19-min.png"  width="100px" height="100px"  alt="" />
                    </div>
                    <h6> <b>{ props.item.name}</b> </h6>
                    <small>Student</small>
                </div>
                <div className="col  s12 m7">
                    <article className="pt-50">
                        {props.item.description}
                    </article>
                </div>
                <div className="col  s12 m2"></div>
            </div>
            <br/>
        </div>
    )
}
