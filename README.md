# Holiday Atlas — learn in small steps

This is a simple calendar website. It has only three web files:

- `index.html` — the content and structure.
- `styles.css` — how it looks.
- `app.js` — the interactive calendar behaviour.

Open `index.html` in your browser to view it. You do not need to install anything or run any command first.

## Step 1: Understand the website files

Do not try to read everything at once. Start with `index.html`:

```html
<h1>Make room for the days that matter.</h1>
```

`<h1>` starts a large heading and `</h1>` ends it. HTML is the page's content.

Then open `styles.css` and find:

```css
body { background: var(--paper); }
```

`body` means the whole page. `{ }` contain style rules. `background:` chooses the background colour. CSS is the design.

Finally open `app.js`. This line is data:

```js
{ date: '2026-01-26', name: 'Republic Day' }
```

`{ }` makes one object: a grouped piece of information. `date` and `name` are labels; `:` separates a label from its value. JavaScript makes the page react when you click previous/next month.

## Step 2: Your first CI workflow

Open `.github/workflows/ci.yml`. It has just one job: confirm the website's `index.html` file exists.

```yaml
on:
  push:
    branches: [main]
```

YAML uses spaces to show “inside”. `push:` is inside `on:`, and `branches:` is inside `push:`. Use spaces—not tabs. `[main]` means a list containing `main`.

Later, after this feels comfortable, we can replace this tiny check with real automated browser tests.

## Step 3: Put it online with Netlify

For now, use Netlify's GitHub connection instead of a second deployment workflow:

1. Push this project to GitHub.
2. In Netlify choose **Add new site → Import an existing project → GitHub**.
3. Choose this repository. Set the publish directory to `.` and leave the build command empty.
4. Click **Deploy site**.

From then on, every push to `main` automatically updates the Netlify site. That is deployment. It is simpler than handling tokens and secrets while you are learning the foundations.

## Your practice loop

1. Create a branch: `git switch -c change-heading`.
2. Change one sentence in `index.html`.
3. Commit and push it.
4. Make a GitHub Pull Request. The **Check website** action runs.
5. Merge only after it is green. Netlify deploys the merged version.

When you are comfortable with this, add a real JavaScript test; then add a Netlify deployment action with protected secrets.
