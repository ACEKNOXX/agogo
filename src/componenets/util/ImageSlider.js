import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    }

export default function ImageSlider(props) {
    const imgs = props.imgs 

    return (
        <div>
            <Carousel className="grey" autoplay>
                {imgs.map((img) => `<div><img src="${img}" height="300px" alt=""/></div> `)
                }

                {/* <div>
                    <h3 style={{
                        height: '160px',
                        color: '#fff',
                        lineHeight: '160px',
                        textAlign: 'center',
                        background: '#364d79',
                    }
                    }>2</h3>
                </div>
                <div>
                <h3 style={{
                            height: '160px',
                            color: '#fff',
                            lineHeight: '160px',
                            textAlign: 'center',
                            background: '#364d79',
                        }
                    }>3</h3>
                </div>
                <div>
                <h3 style={{
                            height: '160px',
                            color: '#fff',
                            lineHeight: '160px',
                            textAlign: 'center',
                            background: '#364d79',
                        }
                    }>4</h3>
                </div> */}
            </Carousel>
        </div>
    )
}
