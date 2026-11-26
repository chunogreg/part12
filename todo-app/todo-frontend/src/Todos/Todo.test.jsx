import { render, screen } from "@testing-library/react";
import { describe, expect, vi, it } from "vitest";
import Todo from "./Todo";

const todo = {
  text: "Do the testing exercise",
  done: false,
};

describe("Testing <Todo />", () => {
  it("renders todo text", () => {
    render(<Todo todo={todo} deleteTodo={vi.fn()} completeTodo={vi.fn()} />);

    expect(screen.getByText("Do the testing exercise")).toBeTruthy();
  });
});
