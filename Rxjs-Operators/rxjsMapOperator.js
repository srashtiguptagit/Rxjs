// Suppose we want to use the existing observable and then tranform the data

const http$  = createObservable('hasgdjhgsadjgdas');

const courses = http$.pipe(map((body)=>{
    console.log(courses);

}))