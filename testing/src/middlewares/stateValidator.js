import tv4 from "tv4";
import stateSchema from "./stateSchema";

//getState is a funciton that reutrns all of the state from redux store
export default ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //to immediately pass the action on through the middleware, we call next
    next(action);

    //now we can write out validation logic, which will only occur after the action has gone through all the rest of everthing else inside of our redux store
    //grab our state after its passed through everything and validate it against our state schema

    var valid = tv4.validate(getState(), stateSchema);

    console.log(valid);

    if (!tv4.validate(getState(), stateSchema)) {
      console.warn("Invalid state schema detected");
    }
  };
