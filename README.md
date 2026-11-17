<<<<<<< HEAD
# SourinaDutta_Portfolio
=======
# Sourina Dutta Oishi — Next.js Portfolio

A responsive dark navy portfolio with purple/blue glow accents using Next.js App Router, TypeScript, Lucide icons and CSS. Configured for GitHub Pages static export.

## CV-based content
- B.Sc. Computer Science and Engineering, Premier University, Chittagong (2022–2026), CGPA 3.90/4.00; thesis ongoing.
- Thesis: “Understanding Rider Behavior from Egocentric View in Unstructured Environment”.
- The three projects, technical/research skills, language proficiency and certifications are transcribed from the supplied CV.
- No employment experience section is shown because the CV lists no employment experience.
- LinkedIn is omitted while the account is restricted.
- Email is shown as the public contact. Phone number and street-level address are intentionally not published.

## Add your photo
Save your portrait as `public/images/profile.jpg`. The hero currently shows an initials placeholder. To use your own photo, replace the contents of `.portrait-inner` in `src/app/page.tsx` with `<img src="/images/profile.jpg" alt="Sourina Dutta Oishi" />`, then add `.portrait-inner img { width:100%; height:100%; object-fit:cover; border-radius:50%; }` to `src/app/globals.css`.

## Run locally
Install Node.js LTS, then run:
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Publish on GitHub Pages
Create a public repository named exactly `SourinaDutta.github.io`. The site URL will be:
https://SourinaDutta.github.io/

1. Push all project files to the `main` branch.
2. Open repository Settings → Pages.
3. Set Source to **GitHub Actions**.
4. The included workflow builds the static Next.js export and deploys the `out/` folder.

GitHub Pages serves static files, so this project uses `output: "export"` and does not rely on server-side Next.js features or API routes.

## Push commands
```bash
git init
git add .
git commit -m "Initial Next.js portfolio"
git branch -M main
git remote add origin https://github.com/SourinaDutta/SourinaDutta.github.io.git
git push -u origin main
```

Before sharing, add your photo and verify that you want your email publicly visible. Add project repository links only when the repositories are public and ready.
>>>>>>> 1026dd8 (First stage)
