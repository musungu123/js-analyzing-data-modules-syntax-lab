// Step 5: Require datejs outside of combineUsers
require('datejs');

// Step 1: Create combineUsers using rest parameters (...args)
function combineUsers(...args) {
  // Step 2: Initialize combinedObject with users array
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge arrays into combinedObject.users
  for (const userArray of args) {
    combinedObject.users.push(...userArray);
  }

  // Step 5: Add merge_date in M/d/yyyy format using datejs
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return the object
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};