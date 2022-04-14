import React from "react"
import ConvoNode from "./ConversationNode";

export default function ConversationList({user}) {
    // Get list of conversations user is having  

    fetch("http://127.0.0.1:8000/thread/threads-by-person/1/").then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response
    }).then(data => {
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
    return (
        <div>ayo</div>
    )
}