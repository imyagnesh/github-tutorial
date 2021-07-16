import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoFilter from "./todoFilter";

test("should take snapshot", () => {
  const { container } = render(<TodoFilter value="all" onFilter={() => {}} />);
  expect(container.firstChild).toMatchSnapshot();
});

test("should render TodoFilter Without Error", () => {
  const { container } = render(<TodoFilter value="all" onFilter={() => {}} />);
  expect(container.firstChild).not.toBeNull();
});

test("should render 3 buttons", () => {
  const { queryAllByRole } = render(
    <TodoFilter value="all" onFilter={() => {}} />
  );
  const buttons = queryAllByRole("button");
  expect(buttons.length).toBe(3);
});

test("should click all button", () => {
  const fn = jest.fn();
  const { queryAllByRole } = render(<TodoFilter value="all" onFilter={fn} />);
  const buttons = queryAllByRole("button");
  fireEvent.click(buttons[0]);
  expect(fn).toBeCalledTimes(1);
  expect(fn).toBeCalledWith("all");
  fireEvent.click(buttons[1]);
  expect(fn).toBeCalledTimes(2);
  expect(fn).toBeCalledWith("pending");
  fireEvent.click(buttons[2]);
  expect(fn).toBeCalledTimes(3);
  expect(fn).toBeCalledWith("completed");
});
