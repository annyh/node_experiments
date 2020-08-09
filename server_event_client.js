var EventSource = require("eventsource");
// Declare an EventSource
const source = new EventSource("http://localhost:5000/events");
source.addEventListener('message', function (e) {
    console.log(e.data);
}, false);

source.addEventListener('open', function (e) {
    console.log('something opened', e);

}, false);

source.addEventListener('close', function (e) {
    if (e.readyState == EventSource.CLOSED) {
        console.log('something closed', e);
    }
}, false);