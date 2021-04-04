window.BENCHMARK_DATA = {
  "lastUpdate": 1617549859759,
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
      }
    ]
  }
}