// // Supoose we have a usecase that we have to create customized observabe which will fetch some data

// const http$ = Observable.create(observer => {
//     fetch('abc').then((response) => {
//        return response.json();
//     }).then(body => {
//         observer.next(body);
//         observer.complete();
//     }).catch(error => {
//         observer.error(error);
        
//     });
// }


// http$.subscribe((courses) => {
//     console.log(courses)

// }),
// () => {},    // Errors
// () => {}     // Completion
// );