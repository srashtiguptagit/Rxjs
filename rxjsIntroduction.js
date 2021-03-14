// Rxjs deals with the stream of data which comes when we subscribe to the events

// @Component {
//     selector: 'about',
//     templateUrl: './AboutComponent.html',
//     styleUrls: ['./AboutComponent.scss']
// }

export class AboutComponent  {

    ngOninit() {
        document.addEventListener('clcik', event => {
            console.log(event);
        });
    }

    // Other events which generate a stream of data are setInterval, settimeout
    // addEventListner, setInterval generates multiple stream of values but setTimeout generates a stream only for the spcified perios
    // After that it stops emiting the value.

    // setInterval(() => {    // This method generates a continous stream of values and can never be completed
    //     console.log(val);
    // }, 1000);

    // setTimeout((val) => {     // This method generates a stream but only till th timeout
    //     console.log(val);
    // }, 3000);
}