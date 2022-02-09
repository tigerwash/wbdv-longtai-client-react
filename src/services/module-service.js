const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/longtai/courses/COURSE_ID/modules"

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
    .then((response => response.json()))