// // There could be a case when i dont want to have more code manupalation logic in my subscription

// export class abc {

// beginnerCourse$ = Observable<Course[]>;

// advanceCourse$ = Observable<Course[]>;

// this.beginnerCourse$ = https$.
//     pipe(map(courses) => courses.filter((course.category == 'BEGINER'));

// this.advanceCourse$ = https$.
//     pipe(map(courses) => courses.filter((course.category == 'ADVANCED'));


// // so instead of susbscribing it we can create 2 different methods and  work lineraly

// // in html how do we use thses values

// <div [courses]= "beginnerCourse$ | async">
// </div>

// <div [courses]= "advanceCourse$ | async">
// </div>