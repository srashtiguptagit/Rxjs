// // Reactive extentions for Javascript (RxJs)
// // Is a librray which bascially helps to combine the values coming form different streams in
// // a manageble way.

// // Rxjs is the extention of our normal JS as normal javascript has only these methods to have streams of data
// // Problem is if we have multiple streams of data combined with normal JS it becomes unmanageble
// // import {OnInit} from '@angular/Core';

// export class AboutComponent  {

//     ngOninit() {

//         const interval$ = Interval(1000);    // $ sign indicates its an RXJS Observable
//         // 1. Observable<Number>

//         // Observale will emit the stream of values only after we subscribe it

//         interval$.subscribe((val) => {     // Once we subscribe to observale then only we create the stream of values.
//             console.log(val);
//         });

//         // 2. Another Rxjs Observale
//         const timer$ = timer(3000, 1000);   // with timer method we wait for 3 seconds and then emit value every second

//         timer$.subscribe((val) => {
//             console.log('2nd stream of value');
//         });

//         // 3. Another  rxjs click observale

//         const clickEve$ = fromEvent(document, 'click');  // 1st argument is source of event and 2 nd argument is the event.

//         clickEve$.subscribe(()=> {
//             console.log('3rd stream of vaue');  // Values emitted
//         }),

//         (error) => console.log(error),  // errors emitted

//         () => console.log('Compeltion');  // complettion

//     }
    
//     // Observale is the blueprint of stream of data which will produce the stream of data once u have subscribed to it

// }
