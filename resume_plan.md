# Self-Hosted JSON Resume on GitHub Pages

## Step 1: Create Your GitHub Repository

Create a repository named `yourusername.github.io` (this gives you the URL `https://yourusername.github.io`):

```bash
# Or create via GitHub web UI
gh repo create yourusername.github.io --public
cd yourusername.github.io
```

## Step 2: Create Your `resume.json`

Create a file following the [JSON Resume schema](https://jsonresume.org/schema):

```json
{
  "basics": {
    "name": "Your Name",
    "label": "Software Engineer",
    "email": "you@email.com",
    "phone": "(555) 123-4567",
    "url": "https://yourwebsite.com",
    "summary": "Brief summary about you...",
    "location": {
      "city": "San Francisco",
      "countryCode": "US"
    },
    "profiles": [{
      "network": "LinkedIn",
      "url": "https://linkedin.com/in/you"
    }]
  },
  "work": [{
    "name": "Company",
    "position": "Developer",
    "startDate": "2020-01",
    "summary": "What you did..."
  }],
  "education": [{
    "institution": "University",
    "area": "Computer Science",
    "startDate": "2016",
    "endDate": "2020"
  }],
  "skills": [{
    "name": "JavaScript",
    "keywords": ["React", "Node.js", "TypeScript"]
  }],
  "meta": {
    "theme": "professional"
  }
}
```

## Step 3: Set Up GitHub Action for Auto-Build

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy Resume

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install resume-cli and theme
        run: |
          npm install -g resume-cli
          npm install jsonresume-theme-professional
      - name: Export to HTML
        run: resume export resume.html --theme jsonresume-theme-professional
      - name: Create index.html
        run: |
          cat > index.html << 'EOF'
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Name - Resume</title>
          </head>
          <body>
          EOF
          cat resume.html >> index.html
          echo '</body></html>' >> index.html
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 4: Enable GitHub Pages

1. Go to your repo on GitHub
2. Settings → Pages
3. Under Source, select **GitHub Actions** (not "Deploy from a branch")
4. Save

## Step 5: Push and Deploy

```bash
git add .
git commit -m "feat: add resume with GitHub Pages deployment"
git push origin main
```

Your resume will be live at: `https://yourusername.github.io`

---

## Optional: Custom Domain

1. Buy a domain (e.g., `yourname.com`)
2. In GitHub repo → Settings → Pages → Custom domain
3. Add your domain
4. Configure DNS:
   - CNAME record: `www` → `yourusername.github.io`
   - A records (for apex domain): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
5. Create a `CNAME` file in your repo root with your domain:

```
yourname.com
```

---

## Available Themes

Replace `jsonresume-theme-professional` in the workflow with any of:

- `jsonresume-theme-flat`
- `jsonresume-theme-onepage`
- `jsonresume-theme-tailwind`
- `jsonresume-theme-stackoverflow`
- `jsonresume-theme-class`
- `jsonresume-theme-even`

---

## How It Works

1. You edit `resume.json` in your repo
2. GitHub Action automatically runs on push
3. `resume-cli` converts JSON → HTML using your chosen theme
4. Deployed to GitHub Pages with HTTPS
5. Share your custom URL with anyone

No dependency on jsonresume.org registry — fully under your control.
