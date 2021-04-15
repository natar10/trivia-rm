import React from "react";
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Subscribe from "./Subscribe";

const renderComponent = () => render(<Subscribe path="/subscribe" />);

describe("Subscribe component", () => {
  describe("when the Subscribe component is rendered", () => {
    it("returns the Subscribe! title", async () => {
      const { getByText } = renderComponent();
      await waitFor(() => {
        getByText("Subscribe!");
      });
    });
    it("returns the form", async () => {
      const { getByPlaceholderText, getByText } = renderComponent();
      await waitFor(() => {
        getByPlaceholderText("Your Rickiest Name");
        getByPlaceholderText("Email Rick");
        getByText("Do you also wish to subscribe to our other NewsLetters?");
        getByText("-?-");
      });
    });
    it("does not show the newletters options", async () => {
      const { queryByText } = renderComponent();
      await waitFor(() => {
        expect(queryByText("Select NewsLetters:")).not.toBeInTheDocument();
      });
    });
  });

  describe("when the user clicks on more NewsLetters", () => {
    it("returns the Select NewsLetters", async () => {
      const { getByTestId, getByText, getAllByTestId } = renderComponent();
      await waitFor(() => screen.getByText("-?-"));
      fireEvent.change(getByTestId("select"), { target: { value: "YES" } });
      await waitFor(() => {
        getByText("YES");
        getByText("Select NewsLetters:");
      });
    });
  });
});
