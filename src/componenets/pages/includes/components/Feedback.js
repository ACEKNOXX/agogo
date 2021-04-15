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
        },
        {
            name: "Georgie O.",
            description: "Thank you KWO for all your work with us ! 🙏🏾 Thank you all my fellow jade aurora tribers for making this work seamlessly 🙏🏾."
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
            <div className="row">
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </div>
            
            

        </div>
    )
}

function Item(props)
{
    return (
            
        <div className="col s12 m4 l4 ">
            <div className=" row   container" id="feedback-tab"  style={{minHeight:"280px"}}>
                <div className="col  s12 center ">
                    
                    <h6> <b>{ props.item.name}</b> </h6>
                </div>
                <div className="col  s12 ">
                    <article className="pt-50">
                        {props.item.description}
                    </article>
                </div>
                
            </div>
        </div>
        
    )
}
