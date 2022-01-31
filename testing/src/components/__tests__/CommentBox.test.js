import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";
import Root from "Root";

//fullDOM test instead of shallow just to show how to do it

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "reducers";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
  //this works, but not best way.  Would have to put this everywhere
  // <Provider store={createStore(reducers, {})}>
  //   <CommentBox />
  // </Provider>
});

afterEach(() => {
  wrapped.unmount();
});

test("has a text area and a button", () => {
  //create an instance of the comment box component, then pass it into mount function provided by enzyme
  //enzyme takes our component instance, attempt to render it into the fake DOM created by JSDOM, then returns object tht is stored in wrapped
  //   const wrapped = mount(<CommentBox />);

  //   console.log(wrapped.find("textarea").length);
  //   console.log(wrapped.find("button").length);

  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

//describe function used to group together certain sets of tests that have common setup or teardown
describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });

    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    //returns a reference to our textarea element inside of our component
    //second argument to simulate function is a 'mock object'
    // wrapped.find("textarea").simulate("change", {
    //   target: { value: "new comment" },
    // });

    //in order to not wait for re-render (setState is not immediately re-rendered)
    //update forces component re-render
    // wrapped.update();

    //textarea received the correct value prop
    //prop function allows us to pull the prop that is passed to any element in our component
    //find the textarea element, call the prop method on it, and ask it to retrieve the 'value' prop that was assigned to it
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  //enters some text into the text area, submits the form, then verifies textarea is empty
  //need to simulate a submit event on the form itself
  test("when form is submitted, textarea gets emptied", () => {
    // wrapped.find("textarea").simulate("change", {
    //   target: { value: "new comment" },
    // });

    // wrapped.update();

    //dont necessarily need this expectation, as we proved it worked in above test
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");

    //when you do an HTML submit, it clears the input box automatically
    wrapped.find("form").simulate("submit");

    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
