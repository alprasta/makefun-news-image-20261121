# The World Today — 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/alprasta/makefun-news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/alprasta/makefun-news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A single front page that sums up Saturday 21 November 2026, built for
make.fun's [news-image-20261121 bounty](https://make.fun/bounty/news-image-20261121).

## The three stories

1. **Russian missiles land in Poland** — Two Russian missiles and a drone come down in south-eastern Poland during a huge attack on Ukraine. Nobody was hurt. NATO calls it a "grave violation" of Polish airspace; PM Tusk calls it "an intentional provocation." (Reuters, AP, AFP)
2. **Cyclone Akvan hits Odisha** — The storm crosses the coast near Gopalpur with winds of 80 km/h. More than 300,000 people were evacuated to shelters; no deaths reported.
3. **Wall Street slumps into correction** — US stocks fall about 3.7% as AI shares sell off; the S&P 500 and the Dow enter correction territory.

Also today: COP31 climate talks stall in Turkey; Trump says Iran wants a deal; NATO chief Rutte visits Warsaw; Bolsonaro is taken to hospital; and India fight back in the Wellington Test.

## How it was made

The three pictures are illustrations with no words inside them. The front page itself — masthead, headlines and captions — is set in a real font, so every word is spelled right and stays readable when the page is small. The masthead names the date: 21 November 2026. The picture is stored as JPEG data under the name `entry.png`, and the program hands it on untouched, so what the grader receives is exactly the file in this repository.

Sources: Reuters, AP, AFP — as credited on the front page.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `entry.png` into the output folder, exactly as it is.
