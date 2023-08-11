import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Trivia from "./Trivia"

describe("Trivia page", () => {
  describe("when the Trivia component is rendered", () => {
    it("returns the single character for the question", async () => {
      render(<Trivia />)
      await waitFor(() => {
        screen.getByText("Guess Character")
      })
    })

    it("service returns the random characters for the question", async () => {
      render(<Trivia />)
      await waitFor(() => {
        screen.getByText("Random Character 1")
        screen.getByText("Random Character 2")
        screen.getByText("Random Character 3")
      })
    })
  })

  describe("Character selection", () => {
    describe("when click Need a Clue, ", () => {
      it("returns the clue from the API", async () => {
        render(<Trivia />)
        await waitFor(() => {
          fireEvent.click(screen.getByText("Need a clue?"))
          expect(screen.getByRole("tooltip")).toHaveTextContent(
            "This character apeared in: The Ricklantis Mixup",
          )
        })
      })
    })
    describe("when clicks the right character", () => {
      it("returns +1 point", async () => {
        render(<Trivia />)
        await waitFor(() => screen.getByText("Guess Character"))
        fireEvent.click(screen.getByText("Guess Character"))
        await waitFor(() => {
          expect(screen.getByRole("point-counter")).toHaveTextContent("10")
        })
      })
      it("lifes remain intact", async () => {
        render(<Trivia />)
        await waitFor(() => {
          fireEvent.click(screen.getByText("Guess Character"))
          expect(screen.getByRole("lifes-counter")).toHaveTextContent("3/3")
        })
      })
      it("returns +1 in game question on next", async () => {
        render(<Trivia />)
        await waitFor(() => {
          fireEvent.click(screen.getByText("Guess Character"))
          expect(screen.getByRole("question-counter")).toHaveTextContent("2")
        })
      })
    })
    describe("when clicks the wrong character", () => {
      it("returns 0 points", async () => {
        render(<Trivia />)
        await waitFor(() => {
          fireEvent.click(screen.getByText("Random Character 1"))
          expect(screen.getByRole("point-counter")).toHaveTextContent("0")
        })
      })
      it("return -1 life", async () => {
        render(<Trivia />)
        await waitFor(() => {
          fireEvent.click(screen.getByText("Random Character 1"))
          expect(screen.getByRole("lifes-counter")).toHaveTextContent("1/3")
        })
      })
    })
  })
})
