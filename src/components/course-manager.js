import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route, Routes} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";


class CourseManger extends React.Component{
    state = {
        courses: []
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c =>
                    c._id === course._id ? course : c
                 )
                // courses: prevState.courses.map(c => {
                //     if(c._id === course._id){
                //         return course
                //     } else {
                //         return c
                //     }
                // } )
            })))
    }

    componentDidMount() {
        findAllCourses()
            .then(actualCourses => this.setState({
                courses: actualCourses
            }))
    }

    addCourse = () => {
        const newCourse = {
            title: "News Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState)=> ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })

            ))
        // this.state.courses.push(newCourse)
        // 通知 react 我的course 改变了，我们要刷新
        // this.setState(this.state)
        console.log("added 1 !")
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
            //     const newCourses = this.state.courses
            //         .filter(course => course !== courseToDelete)
            //     this.setState({courses: newCourses})
                this.setState((prevState) => {
                    let nextState = {}
                    nextState.courses =
                        prevState.courses.filter(course => course !== courseToDelete)
                    return nextState
                })

            })

    }

    render() {
        return(
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                    <Route path="/courses/table">
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>
                    <Route path="/courses/grid">
                        <CourseGrid
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>

                    <Route path={[
                                    "/courses/editor/:courseId",
                                    "/courses/editor/:courseId/:moduleId",
                                    "/courses/editor/:courseId/:moduleId/:lessonId"]}
                        render={(props) =>
                            <CourseEditor {...props}/>}>
                    </Route>
            </div>
        )
    }
}



// component需要 export
export default CourseManger