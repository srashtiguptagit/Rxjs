// concatenation logic in observables. this is very important in save operations

const source1$ = of(1,2,3)   // of method is used to get all types of observables

const source2$ = of(4, 5, 6);

//Now we want to do we have to design it in such a way that i let source1 to finish then source2

const result$ = concat(source1$, source2$);  // this works sequentially first source1 ends then source2 starta

result$.subscribe((val) => {
    console.log(val);   // 1,2,3,4,5,6
})


// Logic behind concatMap

this.FormData.valueChanges
.pipe(
    filter(
        () => this.FormData.valid),
    concatMap(chnages => this.saveCourses(changes))    // this method save changes is actualy creating observales which are making http calls
    // thus to use concatMap here we are making thoe http calls sequential
)

