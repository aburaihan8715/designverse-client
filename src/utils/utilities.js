// Function to remove duplicates based on the "email" property
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

export { removeDuplicateObjects };
