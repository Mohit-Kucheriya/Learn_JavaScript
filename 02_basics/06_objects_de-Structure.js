// Objects de_structuring

const course = {
  courseName: "JS Hindi",
  courseInstructor: "Hitesh Choudhary",
  price: "Free",
};

console.log(course);

let { courseName, courseInstructor: instructor } = course;
console.log(courseName);
console.log(instructor);
