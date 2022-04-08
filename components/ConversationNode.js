import React from "react";

export default class ConversationNode {

    constructor(id) {
        this.id = id
    }

    getData() {
        fetch("http://127.0.0.1:8000/person/1/").then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
    }

    render() {
        const data = this.getData()
        const firstName = data["first_name"]
        const lastName = data["last_name"]

        return <Button/>
    }
}