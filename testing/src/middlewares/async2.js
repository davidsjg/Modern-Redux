//allow us to create async action creators, or action creators that return a promise on its payload property

//dispatch is destructered off of object property
//changing it to an arrow function allows us to omit curly braces and omit return keyword
export default ({ dispatch }) =>
  //next is a function and is a reference to the next middleware on our chain
  //if our middleware does not care about the incoming action, then it can call this next function with that action, and this will forward this action on to the next middleware
  (next) =>
  //called with our action object, the real action that got returned from our action creator (has type and poss payload properties)
  (action) => {};

// above refactored from

// export default function ({dispatch}) {
//     return function(next) {
//         return function(action) {

//         }
//     }
// }
