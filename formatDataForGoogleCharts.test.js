const formatDataForGoogleCharts = require("./formatDataForGoogleCharts");

describe("formatDataForGoogleCharts", () => {
  it("formats data for Google Charts", () => {
    data = [
      [
        1517265574715,
        [
          ["2017-11-23T05:00:00.000Z", 91],
          ["2017-11-30T05:00:00.000Z", 68],
          ["2017-12-07T05:00:00.000Z", 39],
          ["2017-12-19T05:00:00.000Z", 147],
          ["2017-11-10T05:00:00.000Z", 42],
          ["2017-12-09T05:00:00.000Z", 67],
          ["2017-12-21T05:00:00.000Z", 89],
          ["2017-12-22T05:00:00.000Z", 67],
          ["2017-12-04T05:00:00.000Z", 142],
          ["2017-11-22T05:00:00.000Z", 45],
          ["2017-12-11T05:00:00.000Z", 124]
        ]
      ],
      [
        1517265644789,
        [
          ["2017-12-22T05:00:00.000Z", 67],
          ["2017-12-04T05:00:00.000Z", 142],
          ["2017-11-22T05:00:00.000Z", 45],
          ["2017-12-11T05:00:00.000Z", 124],
          ["2017-11-16T05:00:00.000Z", 33],
          ["2017-11-28T05:00:00.000Z", 24],
          ["2017-12-20T05:00:00.000Z", 75],
          ["2017-12-30T05:00:00.000Z", 18],
          ["2017-11-17T05:00:00.000Z", 47]
        ]
      ],
      [
        1517265654061,
        [
          ["2017-12-20T05:00:00.000Z", 75],
          ["2017-12-30T05:00:00.000Z", 18],
          ["2017-11-17T05:00:00.000Z", 47],
          ["2017-11-20T05:00:00.000Z", 78],
          ["2017-12-18T05:00:00.000Z", 64],
          ["2017-12-26T05:00:00.000Z", 83],
          ["2017-12-05T05:00:00.000Z", 25],
          ["2017-11-14T05:00:00.000Z", 74],
          ["2017-12-15T05:00:00.000Z", 9],
          ["2017-12-25T05:00:00.000Z", 14]
        ]
      ]
    ];

    expect(formatDataForGoogleCharts(data)).toMatchObject([
      [
        { label: "Date", type: "date" },
        { label: "2017-11-23T05:00:00.000Z", type: "number" },
        { label: "2017-11-30T05:00:00.000Z", type: "number" },
        { label: "2017-12-07T05:00:00.000Z", type: "number" },
        { label: "2017-12-19T05:00:00.000Z", type: "number" },
        { label: "2017-11-10T05:00:00.000Z", type: "number" },
        { label: "2017-12-09T05:00:00.000Z", type: "number" },
        { label: "2017-12-21T05:00:00.000Z", type: "number" },
        { label: "2017-12-22T05:00:00.000Z", type: "number" },
        { label: "2017-12-04T05:00:00.000Z", type: "number" },
        { label: "2017-11-22T05:00:00.000Z", type: "number" },
        { label: "2017-12-11T05:00:00.000Z", type: "number" },
        { label: "2017-11-16T05:00:00.000Z", type: "number" },
        { label: "2017-11-28T05:00:00.000Z", type: "number" },
        { label: "2017-12-20T05:00:00.000Z", type: "number" },
        { label: "2017-12-30T05:00:00.000Z", type: "number" },
        { label: "2017-11-17T05:00:00.000Z", type: "number" },
        { label: "2017-11-20T05:00:00.000Z", type: "number" },
        { label: "2017-12-18T05:00:00.000Z", type: "number" },
        { label: "2017-12-26T05:00:00.000Z", type: "number" },
        { label: "2017-12-05T05:00:00.000Z", type: "number" },
        { label: "2017-11-14T05:00:00.000Z", type: "number" },
        { label: "2017-12-15T05:00:00.000Z", type: "number" },
        { label: "2017-12-25T05:00:00.000Z", type: "number" }
      ],
      [
        1517265574715,
        91,
        68,
        39,
        147,
        42,
        67,
        89,
        67,
        142,
        45,
        124,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        1517265644789,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        67,
        142,
        45,
        124,
        33,
        24,
        75,
        18,
        47,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        1517265654061,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        75,
        18,
        47,
        78,
        64,
        83,
        25,
        74,
        9,
        14
      ]
    ]);
  });
});