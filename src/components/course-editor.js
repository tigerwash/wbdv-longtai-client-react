import React from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import {combineReducers, createStore} from "redux";
import LessonTabs from "./lesson-tabs";

// 整合多个reducer
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({props}) => {
    const {courseId, moduleId} = useParams();
        return (<Provider store={store}>
    <div>
        <h2>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"></i>
            </Link>
            Course Editors {courseId} {moduleId}
            <i onClick={() => props.history.goBack()}
               className="fas fa-times float-end"></i>
        </h2>
        {/*row 和 col 都是用来排版的，左边modlule 右边lessons */}
        <div className="row">
            <div className="col-4">
                <ModuleList/>
            </div>
            <div className="col-8">
                <LessonTabs/>
            </div>
        </div>


    </div>
</Provider>)
    }


export default CourseEditor