// Create a promise
const promise = new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log('Promise consumed');
});

new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        
        resolve({ name: 'John', age: 30});
    }, 1000);
}).then((user) => console.log(user));


console.log('Global scope');