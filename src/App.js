function postMessage() {
    if (navigator.serviceWorker.controller) {
        setTimeout(() => {
            const ctr = navigator.serviceWorker.controller;
            ctr.postMessage("hello from page");
        }, 2000);
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('window loaded');
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log("registration successful", registration)
        }).catch(err => {
            console.log("registration failed", err);
        })
    });

    postMessage();
}

console.log("App started");