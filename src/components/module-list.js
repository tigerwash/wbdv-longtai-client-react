import React, {useEffect} from "react";
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
// import {findModulesForCourse} from "../services/findModulesForCourse"
import moduleService from "../services/module-service"

const ModuleList = (
    {
        myModules=[],
        createModule, // = () => alert("Create Module 555"),
        deleteModule, // = (item) => alert("delete this" + item._id ),
        updateModule,
        findModulesForCourse // = (courseId) => console.log(courseId)
    }) => {
    const {courseId} = useParams();
    useEffect(()=>{
        // alert(courseId)
        findModulesForCourse(courseId)
    }, [])
    return (
    <div>
    <h2>Modules {myModules.length} {courseId}</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                <li className="list-group-item">
                    <EditableItem
                            to = {`/courses/editor/${courseId}/${module._id}`}
                            updateItem={updateModule}
                            deleteItem={deleteModule}
                            item={module}/>
                    </li>
                )
            }
            <li className= "list-group-item">
                <i onClick={() => createModule(courseId)} className= "fas fa-plus fa-2x btn"></i>
            </li>
        </ul>
     </div>)
    }

//read data from reducer
const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

//send data to the reducer
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "new module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }) )
        },
        deleteModule: (item) => {
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                }))
        },
        updateModule: (module) => {
            moduleService.updateModule(module._id, module)
                .then( status => dispatch({
                    type: "UPDATE_MODULE",
                    module: module
                }))
        },
        findModulesForCourse: (courseId) => {
            console.log("run findModulesForCourse ....")
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULE_FOR_COURSE",
                    modules: theModules
                }))
        }

    }
}
export default connect(stpm, dtpm)(ModuleList)