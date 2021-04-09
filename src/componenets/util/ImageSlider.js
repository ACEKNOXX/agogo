import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

export default function ImageSlider(props)
{
    const items=props.items
    // var items = [
    //     {
    //         name: "Random Name #1",
    //         description: "Probably the most random thing you have ever seen!"
    //     },
    //     {
    //         name: "Random Name #2",
    //         description: "Hello World!"
    //     }
    // ]

    return (
        <div style={{
            minHeight: "400px",
            // border:"3px dashed red"
        }}>
            <Carousel >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
        
    )
}

function Item(props)
{
    return (
        <div className="center">
            
            <img src={props.item.url} width="100%"  alt=""/>
            <h4>{props.item.title}</h4>
            {/* <p>{props.item.description}</p> */}
           
        </div>
    )
}