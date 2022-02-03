//see async2 for explanation 
export default ({dispatch}) => next => action {

    //check to see if the action as has a promise on payload
    //if it does, wait for it to resolve
    //if it doesn't, send the action on to the next middleware

    if(!action.payload || !action.payload.then) {
        //return keyword here to make sure we dont execute any other code inside of this middleware 
        //next funciton is a reference to the next middleware on the chain (take the action and forward it on, we dont care about it in this middleware)
        return next(action);
    }

    //if there is a promise, we want to wait for the promise to resolve - or get its data - then create a new action with that ddata and dispatch it
    //DISPATCH takes an action and kicks off process of middlewares and reducers 
    //in order to wait for the promise to resolve, we are going to chain on to the promise with a .then statement 
    //can hook into the promise on the payload this way, with the function being called with the data returned whenever the promise resolves:
    action.payload.then(function(response) {
        //take all of the properties out of the action object that got passed to this middleware via spread (type and payload, spread accounts for additional properties)
        const newAction = {...actions, payload: response}
        dispatch(newAction)
    }


}