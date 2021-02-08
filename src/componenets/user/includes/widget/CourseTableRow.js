import React from 'react'

export default function CourseTableRow() {
    return (
        <tr className=" card-panel z-depth-0 p-2">
            <td>
            
                <p>
                <label>
                    <input type="checkbox" />
                    <span>1</span>
                </label>
                </p>
            </td>
            <td>Financial marketing</td>
            <td>Competently underwhelm strategic e-markets...</td>
            <td>Emeka Doe</td>
            <td>
                <span>
                    <button className="btn-flat transparent">
                        <img src="../assets/Aurora_icons/bin.svg" alt="" />
                    </button>
                    <button className="btn-flat transparent">
                        <img src="../assets/Aurora_icons/edit icon.svg" alt="" />
                    </button>
                </span>
            </td>
        </tr>
    )
}
