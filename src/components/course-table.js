import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
// 这个是用 class 的形式实现
export default class CourseTable
    extends React.Component {
    // 建constructor 用来从上一层传数据进这个class
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return(
            <div>
                <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-end"/>
                </Link>
                <h2>Course Table </h2>

                <table className="table">
                    <tbody>
                    {
                        this.props.courses.map((course,index) =>
                        <CourseRow
                            updateCourse={this.props.updateCourse}
                            deleteCourse={this.props.deleteCourse}
                            key = {index}
                            course={course}
                            title= {course.title}
                            owner= {course.owner}
                            lastModified={course.lastModified}
                       /> )
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}