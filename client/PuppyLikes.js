// - Should be a stateless component
// - Should receive a puppy's number of likes as a prop
// - Should render the number of likes a puppy has
// - Should have a button to "like" the puppy
//   - Clicking the button should send a PUT to /api/puppies/:id
//   - The view should update to represent the new number of likes (incremented by one)
// - Should have a button to "unlike" the puppy
//   - Clicking the button should send a PUT to /api/puppies/:id
//   - The view should update to represent the new number of likes (decremented by one)

//     - *HINT 1*: The update is a bit tricky. The response from PUT /api/puppies/:id should be
//     the newly updated puppy. To update it in your state, you should replace the
//     old puppy object in your array with the new puppy object. You can use `.map`
//     for this (for hints on the approach to this, see hint 2). Avoid the temptation to use `.splice`.

//     - *HINT 2* For each puppy in the array, if the puppy's id is equal to the
//     updated puppy object's id, return the updated puppy object instead of the original.
//     Otherwise, return the original.