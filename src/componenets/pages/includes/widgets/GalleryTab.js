import React from 'react'

export default function GalleryTab(props) {
    const daTa = props.dara
    const dara = daTa.data()
    return (
        <div className="col s12 m3 l3">
            <img className="responsive-img z-depth-1" src={dara.url} width="100%" height="300px"
               style={{borderRadius:"5px"}} alt="" />
            <p>{dara.title}</p>
        </div>
    )
}
