// Function to remove object duplicates based on the "email" property
function removeDuplicateObjects(array, property) {
  const uniqueObjects = [];
  const uniqueEmails = new Set();

  array.forEach((obj) => {
    if (!uniqueEmails.has(obj[property])) {
      uniqueEmails.add(obj[property]);
      uniqueObjects.push(obj);
    }
  });

  return uniqueObjects;
}

// remove duplicate element form an array
const removeDuplicateElement = (array) => {
  const unique = [...new Set(array)];
  return unique;
};

export { removeDuplicateObjects, removeDuplicateElement };
