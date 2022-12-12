import { render } from "@testing-library/react";

import Exhibitions from "../Exhibitions";

const mockExhibitions = [
  {
    "id": 3070,
    "api_model": "exhibitions",
    "api_link": "https://api.artic.edu/api/v1/exhibitions/3070",
    "title": "Van Gogh",
    "is_featured": false,
    "short_description": "Please note: this exhibition is open on weekdays only.",
    "web_url": "https://nocache.www.artic.edu/exhibitions/3070/van-gogh",
    "image_url": null,
    "status": "Closed",
    "aic_start_at": "2016-02-16T00:00:00-06:00",
    "aic_end_at": "2016-05-09T00:00:00-05:00",
    "gallery_id": 2147472240,
    "gallery_title": "Ryerson Library Reading Room",
    "artwork_ids": [],
    "artwork_titles": [],
    "artist_ids": [],
    "site_ids": [],
    "image_id": null,
    "alt_image_ids": [],
    "document_ids": [],
    "suggest_autocomplete_all": {
        "input": [
            "Van Gogh"
        ],
        "contexts": {
            "groupings": [
                "title"
            ]
        }
    },
    "source_updated_at": "2019-05-10T15:52:37-05:00",
    "updated_at": "2022-09-10T23:41:40-05:00",
    "timestamp": "2022-09-11T09:02:57-05:00"
  },
  {
    "id": 3071,
    "api_model": "exhibitions",
    "api_link": "https://api.artic.edu/api/v1/exhibitions/3071",
    "title": "Van Gogh1",
    "is_featured": false,
    "short_description": "Please note: this exhibition is open on weekdays only.",
    "web_url": "https://nocache.www.artic.edu/exhibitions/3070/van-gogh",
    "image_url": null,
    "status": "Closed",
    "aic_start_at": "2016-02-16T00:00:00-06:00",
    "aic_end_at": "2016-05-09T00:00:00-05:00",
    "gallery_id": 2147472240,
    "gallery_title": "Ryerson Library Reading Room",
    "artwork_ids": [],
    "artwork_titles": [],
    "artist_ids": [],
    "site_ids": [],
    "image_id": null,
    "alt_image_ids": [],
    "document_ids": [],
    "suggest_autocomplete_all": {
        "input": [
            "Van Gogh"
        ],
        "contexts": {
            "groupings": [
                "title"
            ]
        }
    },
    "source_updated_at": "2019-05-10T15:52:37-05:00",
    "updated_at": "2022-09-10T23:41:40-05:00",
    "timestamp": "2022-09-11T09:02:57-05:00"
  }
]

describe("Exhibitions", () => {
  describe("Snapshot tests", () => {
    test("it matches the snapshot for basic use", () => {
      const { container } = render(
        <Exhibitions handleSort={jest.fn} exhibitions={mockExhibitions} />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
