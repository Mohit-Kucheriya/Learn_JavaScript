// Example 1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task Completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Resolved");
});

// Example 2
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Async Task");
    resolve();
  }, 1500);
}).then(function () {
  console.log("Promise 2 Resolved");
});

// Example 3
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Mohit-Kucheriya", email: "kucheriya@example.com" });
  }, 2000);
});

promiseThree.then(function (user) {
  const { username, email } = user;
  console.log(username);
});

// Example 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ firstName: "Mohit", lastName: "Kucheriya" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2500);
});

// method chaining
// When we return anything from .then method its result get pass to next .then method.
promiseFour
  .then(function (user) {
    console.log(user);
    return user.firstName;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log(
      "Finally alway get execute, whether promise is resolved or rejected"
    );
  });

// Using Async/Await

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ course: "Complete JavaScript" });
    } else {
      reject("JS Completion error");
    }
  }, 3000);
});

// Note: Always remember using try-catch block in case of async/await
async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

async function getRandomUser() {
  try {
    const randomUrl = "https://jsonplaceholder.typicode.com/users";
    const getResponse = await fetch(randomUrl);
    const getData = await getResponse.json();
    console.log(typeof getData);
    getData.forEach((element) => {
      console.log(element.id);
    });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

getRandomUser();
