import React from "react"

export default function ConversationList({user}) {
    // Get list of conversations user is having
    fetch("http://127.0.0.1:8000/thread/threads-by-person/1/").then(response => {
        if (response.ok) {
            return response.json();
        }
        console.log("failure")
        throw response
    }).then(data => {
        // Iterate thru list of MessageThreads, getting other user
        Array.from(data).forEach(item => {
            let person_id_list = item["people"]
            Array.from(person_id_list).forEach(id => {
                
            })
        })
    })
}