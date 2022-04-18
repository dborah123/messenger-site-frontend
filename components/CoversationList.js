import React, { Component } from "react"
import ConvoNode from "./ConversationNode";
import axios from "axios"

class ConversationList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "user" : props["user"],
            "fetchData": {},
            "ids":[]
        }
        console.log("here")
        this.parseData()
        this.fetchData = this.fetchData.bind(this)
    }

    async fetchData() {
        await axios.get("http://127.0.0.1:8000/thread/threads-by-person/1/")
            .then((response) => {
                console.log("response", response)
                this.fetchData = response.data
                console.log("fetchData", this.state.fetchData)
            }).catch((error) => {
                console.log(error)
            })
        return 0
    }

    parseData() {
        this.fetchData()
        const data = this.state.fetchData
        console.log("parseData")
        for (let item in data) {
            console.log("1")
            let people_id_list = item["people"]
            for (let id in people_id_list) {
                console.log("hi")
                if (id !== this.state.user) {
                    this.state.ids.push(id)
                }
            }
        }
    }

    render() {
        return (
            <div>
                Rasika
            </div>
        )
    }
}

export default ConversationList;

/**
 * .then(data => {
        // Iterate thru list of MessageThreads, getting other user
        return (data.map(item => {
            let person_id_list = item["people"]
            return person_id_list.map(id => {
                console.log(id, user)
                if (id !== user) {
                    console.log("ere")
                    return (
                        <div>
                            wassp
                        </div>
                    )
                } else {
                    return null
                }
            })
        }))
    })    
 */