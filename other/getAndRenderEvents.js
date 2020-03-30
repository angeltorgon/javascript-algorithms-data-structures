// getEvents() --> Promise
// Call it three times, for "offering", "capital" and "distribution"
// Resolves to an array of objects that might look like:
// {
//     "timestamp": 1580237297570,
//     "type": "offering",
//     "label": "Investor Relations sent an email",
//     "message": "Samuel Lucas was invited to Romaine Towers data room",
//     "eventId": 712718
// }
// renderFeed() --> takes an array of objects

function getAndRenderEvents() {

    Promise.all([getEvents("offering"), getEvents("capital"), getEvents("distribution")])
    .then((responses) => {

        const feed = responses.flat()

        feed.sort((a, b) => a.timestamp - b.timestamp)
    
        renderFeed(feed)
    })
}


// review call stack and promises