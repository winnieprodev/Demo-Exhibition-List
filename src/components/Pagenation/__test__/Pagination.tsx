import { render } from "@testing-library/react";

import Pagination from "../Pagination";

const mockPaginationData = {
    total: 6167,
    limit: 30,
    offset: 0,  // 0-based
    current_page: 1, // 1-based
    total_pages: 206
}

describe("Pagination", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot", () => {
      const { container } = render(
        <Pagination paginationData={mockPaginationData} selectPage={jest.fn()} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
