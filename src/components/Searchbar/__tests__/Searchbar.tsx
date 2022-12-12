import { render, fireEvent, cleanup } from "@testing-library/react";

import Searchbar from "../Searchbar";

const setup = () => {
  const utils = render(<Searchbar />)
  const input = utils.getByLabelText('search-input')
  return {
    input,
    ...utils,
  }
}

afterEach(cleanup)

describe("Searchbar", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <Searchbar value="1" onChange={jest.fn()} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('Test SearchbarComponent when the value is changed', () => {
      const {input, getByDisplayValue} = setup()
      fireEvent.change(input, {target: {value: '$23.0'}})
      expect(getByDisplayValue("$23.0")).toBeInTheDocument();
    })
  });
});
