window.BENCHMARK_DATA = {
  "lastUpdate": 1619951454635,
  "repoUrl": "https://github.com/bikeshedder/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "ldm2993593805@163.com",
            "name": "Donough Liu",
            "username": "ldm0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b42f21ec3e212ace25331d0c13889a45769e6006",
          "message": "doc: fix incorrect link in doc (#3670)",
          "timestamp": "2021-04-01T15:24:29+02:00",
          "tree_id": "fb0d40136a86ef56c7986472a255b8cea4cb3d83",
          "url": "https://github.com/bikeshedder/tokio/commit/b42f21ec3e212ace25331d0c13889a45769e6006"
        },
        "date": 1617549858576,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 186069,
            "range": "± 29265",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 675742,
            "range": "± 116229",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4387570,
            "range": "± 863062",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18476014,
            "range": "± 3635482",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@lucaszanella.com",
            "name": "Lucas Zanela",
            "username": "lucaszanella"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0074b963b8ef02308e6367c8edd5c9d210c9038d",
          "message": "doc: add features = \"full\" to readme (#3680)",
          "timestamp": "2021-04-06T11:03:21+02:00",
          "tree_id": "311075a61ef9a0e34f66c0e8b7b2004beab39280",
          "url": "https://github.com/bikeshedder/tokio/commit/0074b963b8ef02308e6367c8edd5c9d210c9038d"
        },
        "date": 1617787612907,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 164861,
            "range": "± 23478",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 609357,
            "range": "± 61018",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4299450,
            "range": "± 1018083",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18157305,
            "range": "± 3288246",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "russell.r.cohen@gmail.com",
            "name": "Russell Cohen",
            "username": "rcoh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14bb2f624f1ac3d440dd302219a48e9e8e926b50",
          "message": "io: add write_all_buf to AsyncWriteExt (#3737)",
          "timestamp": "2021-05-01T20:54:38+02:00",
          "tree_id": "43242f7e908bb52a3a7fd59d83e191839b661ece",
          "url": "https://github.com/bikeshedder/tokio/commit/14bb2f624f1ac3d440dd302219a48e9e8e926b50"
        },
        "date": 1619951446036,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 182805,
            "range": "± 24339",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 679104,
            "range": "± 100550",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4333319,
            "range": "± 818269",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19910240,
            "range": "± 2940605",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "ldm2993593805@163.com",
            "name": "Donough Liu",
            "username": "ldm0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b42f21ec3e212ace25331d0c13889a45769e6006",
          "message": "doc: fix incorrect link in doc (#3670)",
          "timestamp": "2021-04-01T15:24:29+02:00",
          "tree_id": "fb0d40136a86ef56c7986472a255b8cea4cb3d83",
          "url": "https://github.com/bikeshedder/tokio/commit/b42f21ec3e212ace25331d0c13889a45769e6006"
        },
        "date": 1617549870475,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 16051,
            "range": "± 6562",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1122,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 654,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15275,
            "range": "± 4423",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1118,
            "range": "± 131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@lucaszanella.com",
            "name": "Lucas Zanela",
            "username": "lucaszanella"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0074b963b8ef02308e6367c8edd5c9d210c9038d",
          "message": "doc: add features = \"full\" to readme (#3680)",
          "timestamp": "2021-04-06T11:03:21+02:00",
          "tree_id": "311075a61ef9a0e34f66c0e8b7b2004beab39280",
          "url": "https://github.com/bikeshedder/tokio/commit/0074b963b8ef02308e6367c8edd5c9d210c9038d"
        },
        "date": 1617787634132,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15088,
            "range": "± 7784",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1086,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 617,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 14840,
            "range": "± 5553",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1144,
            "range": "± 148",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "ldm2993593805@163.com",
            "name": "Donough Liu",
            "username": "ldm0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b42f21ec3e212ace25331d0c13889a45769e6006",
          "message": "doc: fix incorrect link in doc (#3670)",
          "timestamp": "2021-04-01T15:24:29+02:00",
          "tree_id": "fb0d40136a86ef56c7986472a255b8cea4cb3d83",
          "url": "https://github.com/bikeshedder/tokio/commit/b42f21ec3e212ace25331d0c13889a45769e6006"
        },
        "date": 1617549904757,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6984864,
            "range": "± 2865090",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6412601,
            "range": "± 1876937",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6958799,
            "range": "± 2693945",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 797,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 800,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 784,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 145208,
            "range": "± 26794",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1707,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1122850,
            "range": "± 405512",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 743200,
            "range": "± 230554",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@lucaszanella.com",
            "name": "Lucas Zanela",
            "username": "lucaszanella"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0074b963b8ef02308e6367c8edd5c9d210c9038d",
          "message": "doc: add features = \"full\" to readme (#3680)",
          "timestamp": "2021-04-06T11:03:21+02:00",
          "tree_id": "311075a61ef9a0e34f66c0e8b7b2004beab39280",
          "url": "https://github.com/bikeshedder/tokio/commit/0074b963b8ef02308e6367c8edd5c9d210c9038d"
        },
        "date": 1617787655749,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6840030,
            "range": "± 2637102",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6347121,
            "range": "± 1546863",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5842873,
            "range": "± 3122999",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 712,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 722,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 719,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 141310,
            "range": "± 19245",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1653,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1034875,
            "range": "± 173285",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 746303,
            "range": "± 125711",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "russell.r.cohen@gmail.com",
            "name": "Russell Cohen",
            "username": "rcoh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14bb2f624f1ac3d440dd302219a48e9e8e926b50",
          "message": "io: add write_all_buf to AsyncWriteExt (#3737)",
          "timestamp": "2021-05-01T20:54:38+02:00",
          "tree_id": "43242f7e908bb52a3a7fd59d83e191839b661ece",
          "url": "https://github.com/bikeshedder/tokio/commit/14bb2f624f1ac3d440dd302219a48e9e8e926b50"
        },
        "date": 1619951449238,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 5786475,
            "range": "± 3043677",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5079808,
            "range": "± 2166755",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5073719,
            "range": "± 2879153",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 719,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 723,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 708,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 115332,
            "range": "± 15451",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1433,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 985464,
            "range": "± 172012",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 677502,
            "range": "± 78514",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "ldm2993593805@163.com",
            "name": "Donough Liu",
            "username": "ldm0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b42f21ec3e212ace25331d0c13889a45769e6006",
          "message": "doc: fix incorrect link in doc (#3670)",
          "timestamp": "2021-04-01T15:24:29+02:00",
          "tree_id": "fb0d40136a86ef56c7986472a255b8cea4cb3d83",
          "url": "https://github.com/bikeshedder/tokio/commit/b42f21ec3e212ace25331d0c13889a45769e6006"
        },
        "date": 1617549911636,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 923,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16018,
            "range": "± 4968",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 986,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 15653,
            "range": "± 5296",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 516,
            "range": "± 81",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@lucaszanella.com",
            "name": "Lucas Zanela",
            "username": "lucaszanella"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0074b963b8ef02308e6367c8edd5c9d210c9038d",
          "message": "doc: add features = \"full\" to readme (#3680)",
          "timestamp": "2021-04-06T11:03:21+02:00",
          "tree_id": "311075a61ef9a0e34f66c0e8b7b2004beab39280",
          "url": "https://github.com/bikeshedder/tokio/commit/0074b963b8ef02308e6367c8edd5c9d210c9038d"
        },
        "date": 1617787645821,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1044,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16201,
            "range": "± 7773",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1085,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16066,
            "range": "± 4074",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 599,
            "range": "± 39",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}