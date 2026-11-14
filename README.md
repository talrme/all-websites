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

Languages is included with its staging-gallery link and globe app icon. Its recent rank puts it first in the default ordering, followed by Preferences. Bump the data script's version in `index.html` when updating the directory so browsers pick up additions.
