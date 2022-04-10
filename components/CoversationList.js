import React from "react"
import ConversationNode from "./ConversationNode";

export default function ConversationList({user}) {
    // Get list of conversations user is having
    fetch("http://127.0.0.1:8000/thread/threads-by-person/1/").then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response
    }).then(data => {
        // Iterate thru list of MessageThreads, getting other user
        Array.from(data).forEach(item => {
            let person_id_list = item["people"]
            person_id_list.map(id => {
                if (id !== user) {
                    return <ConversationNode id={id}/>
                } else {
                    return null
                }
            })
        })
    })
}