// There could be a situation that once 1 save request is ongoing and the save button is clicked multiple times 
// so those clciks should be ignored

fromEvent(this.nativeElement.saveButton, 'click')
.pipe(
    exhaustMap(change=> this.abc(change))   // here this meethod abc generates the observableswhich in turn makes the http calls
    // With exhaust map we ignore the requests if 1 request is ongoing.
)
.subscribe(console.log);