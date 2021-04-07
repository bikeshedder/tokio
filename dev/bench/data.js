window.BENCHMARK_DATA = {
  "lastUpdate": 1617787613999,
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
      }
    ]
  }
}