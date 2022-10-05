import re
import requests
import pandas as pd
from bs4 import BeautifulSoup


url = "https://scikit-learn.org/stable/glossary.html"
soup = BeautifulSoup(requests.get(url).content, "html.parser")


def get_section(tag):
    name = tag.find(["h1", "h2", "h3", "h4"]).text.strip("¶")
    text = []
    for s in tag.find_all(recursive=False):
        if s.name == "section":
            yield from get_section(s)
        elif s.name not in {"h1", "h2", "h3", "h4"}:
            text.append(
                s.get_text(strip=True, separator=" ").replace("\n", " ")
            )
    yield name, " ".join(text).strip()


root = soup.select_one("div[role=main] section")

df = pd.DataFrame(
    tuple(
        sorted(
            get_section(root),
            key=lambda v: tuple(map(int, re.findall(r"\d+", v[0]))),
        )
    ),
    columns=["Heading", "Value"],
)

print(df.head(10).to_markdown(index=False))

df.to_csv('data.csv', mode='a', index=False, header=False)