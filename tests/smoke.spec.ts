import { describe } from 'node:test'
import {test} from '../utils/fixtures'
import { appendFile } from 'node:fs'

    test('/Submissions/ incomplete', async({api}) => {
        const response = await api
            .path('/brokers/258708/submissions')
            .params({client__assignees: 258708, is_complete: 'false'})
            .getRequest(200)
        console.log(response)
    })

    test('/Submissions/ completed', async({api}) => {
        const response = await api
            .path('/brokers/258708/submissions')
            .params({client__assignees: 258708, is_complete: 'true'})
            .getRequest(200)
        //console.log(response)
    })

    //lol what
    test('/Submissions/ invalid', async({api}) => {
        const response = await api
            .path('/brokers/a/submissions')
            .params({client__assignees: 258708, is_complete: 'true'})
            .getRequest(200)
        //console.log(response)
    })

///brokers/258708/submissions


//https://jacobtest-us.release.useindio.com/api/clients/10753450/submissions/
test('POST /Submissions/ required fields', async({api}) => {
    const response = await api
        .path('/clients/10753450/submissions/')
        .headers({ 'Content-Type': 'application/json' })
        .body({
            "name":"Post Submission", 
            "effectiveDate":"2026-03-30",
            "dueDate": "2025-12-31",
            "formBundles":[{
            "clientEntity":"9WKKrXm56UBR"
            }]
        })
        .postRequest(201)
    console.log(response)
})



https://jacobtest-us.release.useindio.com/api/clients/10753450/submissions/
test('POST /Submissions/ total fields', async({api}) => {
    const response = await api
        .path('/clients/10753450/submissions/')
        .headers({ 'Content-Type': 'application/json' })
        .body({
                "name":"WHATEVER",
                "effectiveDate":"2026-01-31",
                "dueDate":"2025-10-31",
                "completedDate":null,
                "formBundles":[{
                    "clientEntity":"9WKKrXm56UBR"
                }],
                "signatures":[],
                "documentReviewRequests":[],
                "documentUploadRequests":[],
                "completionMessage":"",
                "linesOfBusiness":[],
                "marketAppetiteCarriers":[],
                "submissionNotificationStatus":[],
                "deleted":false,
                "isRenewal":false,
                "archivedBy":null,
                "clientInProgress":false,
                "dataCollection":"0"
            }
        )
        .postRequest(201)
    //console.log(response)
})

test('POST /Submissions/ object instead of dict', async({api}) => {
    const response = await api
        .path('/clients/10753450/submissions/')
        .headers({ 'content-type': 'application/json'})
        .body({
            name:"post example 3", 
            effectiveDate:"2026-01-24",
            dueDate: "2025-12-31",
            completedDate: null,
            formBundles:[{
                clientEntity:"9WKKrXm56UBR"
            }]
        })
        .postRequest(201)
    console.log(response)
})



test('/Client-Entities/ create', async({api}) => {
    const response = await api
        .path('/clients/10753450/client-entities/')
        .body({
            name: 'Post Entity'
        })
        .postRequest(201)
    console.log(response)
})

test('/Client-Entities/ delete', async({api}) => {
    const response = await api
        .path('/clients/10753450/client-entities/4O0jAgSvovKe/')
        .body({
            name: 'Post Entity'
        })
        .deleteRequest(204)
    console.log(response)
})