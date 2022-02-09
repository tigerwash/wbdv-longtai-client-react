const initialState = {
    modules: [
        {_id: 123, title: "Module 121"},
        {_id: 332, title: "Module 332"},
        {_id: 113, title: "Module 113"},
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            // alert("Create Module 777")
            const newState = {
                modules: [
                    ...state.modules,
                    {
                        title: "new module",
                        _id: (new Date()).getTime()
                    }
                ]
            }
            return newState
        case "DELETE_MODULE":
            alert("delete the module" + action.moduleToDelete.title)
            const newState1 = {
                modules: state.modules.filter(module => {
                    if(module._id === action.moduleToDelete._id){
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(m => {
                    if(m._id === action.action._id) {
                        return action.module
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}

export default moduleReducer