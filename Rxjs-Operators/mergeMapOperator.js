//  Merge operator is used when we want to work with observables parallely

const interval1$ = interval(1000);
const interval2$ = interval1$.pipe(map(val => 10* val ));
const result$ = merge(interval1$, interval2$);

result$.subscribe(console.log());   // 1, 10, 2, 20, 3, 30


//mergemap is used in the scenrios when we want to exceute the save requests parallely

this.FormData.valueChanges
.pipe(
    filter(
        () => this.FormData.valid),
    mergeMap(chnages => this.saveCourses(changes))    // this method save changes is actualy creating observales which are making http calls
    // thus to use mergemap here we are making the http calls parallely
)