// Unsubscribe is very important functionality

const interval$ = interval(1000);
const sub = interval1$.subscribe(console.log);

// for unsusbcription we need a reference to subscription 

setTimeout(() => {
    sub.unsubscribe();
}, 5000);  // 0, 1, 2, 3, 4 and then it unsubscribes



// to implement the cancel logic in our observale

const http$ = Observable.create(observer => {
    const abortController = new AbortController();
    const signal = abortController.signal();
    fetch('abc', {signal}).then((response) => {
       return response.json();
    }).then(body => {
        observer.next(body);
        observer.complete();
    }).catch(error => {
        observer.error(error);
        
    });
    return () => abortController.abort() // this is the cancel method whcih is called when unsubscription happens
}
);
