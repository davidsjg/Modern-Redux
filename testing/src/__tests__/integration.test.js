import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  //sets up moxios and tells it to intercept any request that axios tries to issue
  //turns off requests made by axios
  moxios.install();
  //tell moxios that if it sees a request going to API, attempt to automatically respond to it for us
  //second argument we customize how moxios responds to that request
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    //axios thinks response successfully issued
    status: 200,
    //data that gets served back to axios
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

//jest offers callback, which is first argument 'done'
//this delays jest from saying all tests passed while a timeout is still running
//this way, jest wont consider test complete until done is called
it("can fetch a list of comments and display them", (done) => {
  //attempt to renter the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //find the 'fetchComments' button and click it
  wrapped.find(".fetch-comments").simulate("click");

  //introduce a TINY little pause
  moxios.wait(() => {
    //forces update of component
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
  }, 100);

  //tell jest testing is done
  done();
  wrapped.unmount();
  //expect to find a list of comments
});
