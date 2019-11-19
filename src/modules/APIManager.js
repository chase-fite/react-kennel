const remoteURL = "http://localhost:5002"

export default {
    /*
          Since the purpose of this module is to be used by
          all of the more specialized ones, then the string
          of `animals` should not be hard coded here.
    */

    get(data, id) {
        return fetch(`${remoteURL}/${data}/${id}`).then(e => e.json())
    },
    getAll(data) {
        if (data === "owners") {
            return fetch(`${remoteURL}/${data}?_expand=animal`).then(e => e.json())    
        } else {
        return fetch(`${remoteURL}/${data}`).then(e => e.json())
        }
    }
}