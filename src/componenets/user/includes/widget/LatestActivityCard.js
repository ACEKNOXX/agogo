import React from 'react'

export default function LatestActivityCard() {
    return (
        <div className="col s12">
            <div className="card-panel">
                <ul className="collection row">
                    <li className="collection-item col s12 m8">
                        <span className="title course-title" id="card-title-category">
                            Public finance
                        </span>
                        <p>
                            <span   id="card-title">
                                Financial marketing
                            </span>
                            <br/>
                            <p className="card-desc">
                                Globally embrace open-source Globally embrace open-source.
                            </p>
                            
                        </p>
                    </li>
                    <div className="col s12 m4 center">
                        <a href="single-course.php" className="btn-large btn-flat transparent btn-primary mt-50">
                            Continue learning
                        </a>
                    </div>
                </ul>
                
            </div>
        </div>
    )
}
