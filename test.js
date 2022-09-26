let response1 = { feeling: 1 };
let response2 = { understanding: 3 };

const testObject = {};


let mergeObjects = { ...testObject, ...response1 }
console.log(mergeObjects);
mergeObjects = { ...mergeObjects, ...response2 }
console.log(mergeObjects);
