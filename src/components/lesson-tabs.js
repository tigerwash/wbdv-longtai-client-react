import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom"
import lessonService from '../services/lesson-service'

const LessonTabs = (
    {lessons = [
        {_id: "123", title: "Lesson A"},
        {_id: "123", title: "Lesson B"},
        {_id: "123", title: "Lesson C"}
        ],
        findLessonsForModule
    }) =>{
            const {courseId, moduleId} = useParams();
            useEffect(()=>{
                // console.log("load lessons for module")
                console.log("load lessons for module: " + moduleId)
                findLessonsForModule(moduleId)
            }, [])
            return (
            <div>
                <h2>Lessons {courseId} {moduleId}</h2>
                <ul className="nav nav-tabs">
                    {
                        lessons.map(lesson =>
                            <li className="nav-item">
                                <EditableItem
                                    to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                                    item = {lesson}/>
                            </li>
                        )
                    }
                </ul>
            </div>)}

// state to propoerity mapper
const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
// dispatch to propoerity mapper
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("load lessons for module")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons: lessons
            }))
    }

})

export default connect(stpm, dtpm)(LessonTabs)