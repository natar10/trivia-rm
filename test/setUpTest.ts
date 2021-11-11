import "@testing-library/jest-dom";
import "whatwg-fetch";
import { server } from "./mocks/server";
import { fireEvent, screen, waitFor } from "@testing-library/react";

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
const { diff } = require("jest-diff");

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeEmail(): CustomMatcherResult;
    }
  }
}

expect.extend({
  toBeEmail(received: string) {
    const options = {
      comment: "Object.is email",
      isNot: this.isNot,
      promise: this.promise,
    };

    const pass: boolean = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      received
    );

    const message = pass
      ? () =>
          this.utils.matcherHint("toBeEmail", undefined, undefined, options) +
          "\n\n" +
          `Expected: not ${true}\n` +
          `Received: ${this.utils.printReceived(received)} is ${
            pass ? "" : "not"
          } an email`
      : () => {
          return (
            this.utils.matcherHint("toBeEmail", undefined, undefined, options) +
            "\n\n" +
            `Expected: The received string: ${this.utils.printExpected(
              received
            )} to be an email\n` +
            `Received: The string  ${this.utils.printReceived(received)} is ${
              pass ? "" : "not"
            } an email`
          );
        };

    return { actual: received, message, pass };
  },
});
