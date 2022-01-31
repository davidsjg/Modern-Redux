import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

//JSDOM installed with create react app
//JSDOM library is a javascript code implementation of how the browser works
//JSDOM simulates the existence of the browser, and fools, or tricks, the react library that there is a browser that react is working with

it("shows a comment box", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  console.log(div.innerHTML);

  //look inside div and see if CommentBox is in there (expectation)

  //params for exepct below
  //subject to test    how we are trying to inspect subject(toContain - matcher)    what we want our subject value to be, ideal case
  //   expect(div.innerHTML).toContain("Comment Box");

  //we want to know existence of comment box, not its internal workings (or innerHTML)

  //looks at fake DOM div we created above, find the App component we rendered into, and its going to remove the App component entirely.  This is called cleanup after our tests run
  ReactDOM.unmountComponentAtNode(div);
});

let wrapped;

//before every test, run some common setup logic
beforeEach(() => {
  wrapped = shallow(<App />);
});

//THE ENZYME WAY
it("shows a comment box", () => {
  //wrapped could be replaced with component

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

test("shows a comments list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
