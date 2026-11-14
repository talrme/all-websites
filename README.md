# All Websites

**Live site:** [https://talrme.github.io/all-websites/](https://talrme.github.io/all-websites/)

A colorful arcade-style landing page for the websites in the `Websites For Fun` folder.

## Run Locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Update Tiles

Add, remove, or edit website tiles in `websites-data.js`.

Languages is included with its live Metro Lines app link and globe app icon. Miri’s Books is included with the Paper Parade book-stack icon and is first in the default ordering, followed by Languages and Preferences. Bump the data script's version in `index.html` when updating the directory so browsers pick up additions.
