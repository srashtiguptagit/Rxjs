// Filter opeartor in Rxjs has the same functonaity as es6 filter it return a boolean value


ngOninit() {
    const filtered$ = this.AbortController.pipe(filter((vl) => {
        //some condition

    }).susbcribe()
}