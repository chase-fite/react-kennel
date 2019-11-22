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
        } else if (data === "animals") {
            return fetch(`${remoteURL}/${data}?_embed=owners&_expand=employee`).then(e => e.json())
        } else {
            return fetch(`${remoteURL}/${data}`).then(e => e.json())
        }
    },
    delete(data, id) {
        return fetch(`http://localhost:5002/${data}/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    },
    post(data, newObj) {
        return fetch(`${remoteURL}/${data}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        }).then(data => data.json())
    },
    update(data, editedObj) {
        return fetch(`${remoteURL}/${data}/${editedObj.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedObj)
        }).then(data => data.json());
      }
}