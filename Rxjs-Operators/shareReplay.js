// This operator is veryy helpful when we make http calls using rxjs

// So when we do this we actually make 2 http calls

// this.beginnerCourse$ = https$.
//     pipe(map(courses) => courses.filter((course.category == 'BEGINER'));

// this.advanceCourse$ = https$.
//     pipe(map(courses) => courses.filter((course.category == 'ADVANCED'));

const http$: Observable<any> = createObservable('/api/courses');

const courses$ = http$.
    pipe(
        tap(()=> console.log('abc')),   // Tap method is used to produce side effects in our obseravle chain is, if there is s omething that we want to update outside of this chain we use that
        map(res => Object.defineProperties(res) ),
        shareReplay()
);

courses$.subscribe();

// with shareReplay we will have only 1 http call and multiple susbcriptions