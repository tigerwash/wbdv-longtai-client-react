import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {updateCourse} from "../services/course-service";


//注： 花括号 {} 就是用来 desctruct object 的
const CourseRow = ({deleteCourse, updateCourse, course, title, owner, lastModified}) =>{
    // const [我的参数名， 这个参数的setter] = useState( 参数初始值 )
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle  // ... 用来存所有course 里面的信息，下一行 override 将之前的title 到现在的newTitle
        }
        updateCourse(newCourse)
    }

    return (<tr>
                <td>
                    {/*如果!editing是false 就不跑后面的 Link to ...title */}
                    {!editing && <Link to={`/courses/editor/${course._id}`}>{title}</Link>}
                    {editing && <input
                        onChange={(event)=> setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>}
                </td>
                <td>{owner}</td>
                <td>{lastModified}</td>
                <td>
                    {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                    {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
                    <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>

                </td>
            </tr>)
}


export default CourseRow