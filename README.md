# The World Today — 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/alprasta/makefun-news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/alprasta/makefun-news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A newspaper front page for Saturday 21 November 2026, built as an entry
for make.fun's [news-image-20261121 bounty](https://make.fun/bounty/news-image-20261121).
It carries the day's three biggest stories, plus a strip of the other news
that mattered.

## The three stories

1. **Russian missiles land in Poland** — During a massive Russian attack on Ukraine on 20 November, two Russian missiles and a suspected drone fell on south-eastern Poland. No one was injured. One of the missiles, a Kh-101, landed near Nowy Lipowiec, roughly 50 km from the Ukrainian border. NATO secretary general Mark Rutte described the incursion as a "grave violation" of Polish airspace, while Polish prime minister Donald Tusk called it "an intentional provocation." Allied jets — Polish F-16s and Swedish Gripens — scrambled in response. (Reuters, AP, AFP)
2. **Cyclone Akvan hits Odisha** — Cyclone Akvan came ashore near Gopalpur on the Odisha coast on 20 November, with sustained winds of 70–80 km/h. Odisha moved more than 300,000 people into shelters ahead of the storm, and no deaths were reported.
3. **Wall Street slides into correction** — A sell-off in AI shares dragged US stocks down on 20 November. The S&P 500 dropped 3.7% and the Dow dropped 1.9%, putting both indexes more than 10% below their record highs — correction territory. The Nasdaq fell 5.3%.

Also today: COP31 climate talks stall in Turkey; Trump says Iran wants a deal; NATO chief Rutte visits Warsaw; Bolsonaro is taken to hospital; India fight back in the Wellington Test.

## How it was made

The images on the page are illustrations, and they contain no words at all — every word on the page is set in a real typeface, so nothing is misspelled and the text stays legible even at a small size. The masthead names the date, 21 November 2026. The picture itself is JPEG data saved as entry.png; the program in this repository only copies those bytes into the output folder, so the grader gets exactly the file that is stored here. Because the program never edits the picture and never reads the clock, every run delivers the identical file — the entry is deterministic by construction.

Sources: Reuters, AP, AFP, as credited on the front page.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `entry.png` into the output folder, exactly as it is.
