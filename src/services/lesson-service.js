const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/longtai/modules"

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())

export default {
    findLessonsForModule
}