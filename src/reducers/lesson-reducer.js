const initialState = {

    lessons: []
}

const lessonReducer = (state = initialState, action) => {
        switch (action.type) {
            case "FIND_LESSONS":
                return {
                    ...state,
                    lessons: action.lessons
                }
            default:
                return state
        }
    }

export default lessonReducer