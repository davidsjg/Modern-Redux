import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";

//because CommentList makes use of redux (the connect helper), know that the component is going to expect to see a parent component that contiains provider tag and the redux store
//This is the root
import Root from "Root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

//make sure one LI shows up per comment
test("creates one LI per comment", () => {
  //   console.log(wrapped.find("li").length);
  expect(wrapped.find("li").length).toEqual(2);
});

//make sure we dont have bug during rendering
test("text from each LI is visible", () => {
  //cherio returned, test from component returned
  //   console.log(wrapped.render().text());
  console.log(wrapped.text());
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
