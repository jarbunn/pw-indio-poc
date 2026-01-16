import { describe } from 'node:test'
import {test} from '../utils/fixtures'
import {APIRequestContext} from '@playwright/test'



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


https://jacobtest-us.release.useindio.com/api/clients/10753450/submissions/
test('post example', async({api}) => {
    const response = await api
        .path('/clients/10753450/submissions')
        .headers({ 'Content-Type': 'application/json' })
        .body({
            "name":"post testing 2", 
            "effectiveDate":"2026-01-24",
            "dueDate": "2025-11-23",
            "completedDate":'2025-11-23',
            "formBundles":[{
            "clientEntity":"9WKKrXm56UBR"
            }]
        })
        .postRequest(201)
    //console.log(response)
})



https://jacobtest-us.release.useindio.com/api/clients/10753450/submissions/
test('post example 2', async({api}) => {
    const response = await api
        .path('/clients/10753450/submissions')
        .headers({ 'Content-Type': 'application/json' })
        .body(
            {"name":"WHATEVER","effectiveDate":"2026-01-31","dueDate":"2025-10-31","completedDate":null,"formBundles":[{"clientEntity":"9WKKrXm56UBR"}],"signatures":[],"documentReviewRequests":[],"documentUploadRequests":[],"completionMessage":"","linesOfBusiness":[],"marketAppetiteCarriers":[],"submissionNotificationStatus":[],"deleted":false,"isRenewal":false,"archivedBy":null,"clientInProgress":false,"dataCollection":"0"}
        )
        .postRequest(201)
    //console.log(response)
})

test('post example3 ', async({api}) => {
    const response = await api
        .path('/clients/10753450/submissions')
        .headers({ 'content-type': 'application/json'})
        .body({
            name:"post testing 2", 
            effectiveDate:"2026-01-24",
            dueDate: "2025-11-23",
            completedDate:'2025-11-23',
            formBundles:[{
                clientEntity:"9WKKrXm56UBR"
            }]
        })
        //.postRequest(201)
    console.log(response)
    //const response2 = await response.postRequest(201)
})



test('post example 4', async({api}) => {
    let response = await api
        .path('/clients/10753450/submissions')
        .body({
            name:"post testing 2", 
            effectiveDate:"2026-01-24",
            dueDate: "2025-11-23",
            completedDate:'2025-11-23',
            formBundles:[{
                clientEntity:"9WKKrXm56UBR"
            }]
        })
        .postRequest(201)
    console.log(response)
    //const response2 = await response.postRequest(201)
})

//this works
test('playwright request.post example', async({request}) => {
    const resp = await request.post('https://jacobtest-us.release.useindio.com/api/clients/10753450/submissions/', {
        data: {
            name: "without anything",
            effectiveDate: "2026-01-31",
            dueDate: "2025-11-23",
            formBundles: [{
                clientEntity: "9WKKrXm56UBR"
            }]
        }
    })
    console.log(resp)
})

test('api context response example ', async({api}) => {
    const response = await api
        .path('/clients/10753450/submissions')
        .body({
            name:"post testing 2", 
            effectiveDate:"2026-01-24",
            dueDate: "2025-11-23",
            completedDate:'2025-11-23',
            formBundles:[{
                clientEntity:"9WKKrXm56UBR"
            }]
        })
        //.postRequest(201)
    console.log(response)
    //const response2 = await response.postRequest(201)
})