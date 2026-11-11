# mcisneiros.github.io

Personal academic site of Miguel Cisneiros: https://mcisneiros.github.io

A one-page [Jekyll](https://jekyllrb.com) site with a custom layout on [Bootstrap 5](https://getbootstrap.com), Font Awesome and Academicons. It has a light and a dark theme (follows the system setting, with a toggle in the navbar).

## Where things are

| What | Where |
| --- | --- |
| Page markup | `index.html` |
| Content (edit these, push, the site rebuilds) | `_data/experience.yml`, `projects.yml`, `outputs.yml`, `education.yml`, `training.yml`, `links.yml` |
| Site title, description, URL | `_config.yml` |
| Styles and theme colours | `assets/css/site.css` (colours are variables at the top) |
| Theme toggle, scroll effects | `assets/js/site.js` |
| Photo | `assets/img/profile.jpg` (toggle with `show_photo` in `_config.yml`) |
| Hero artwork (nucleotides and helix, light and dark) | `assets/img/hero-*.svg` |

Icons are an inline SVG sprite at the top of `index.html` (`<symbol id="i-<name>">`); a link's `icon` in `links.yml` must match a symbol id. Everything (fonts, Bootstrap, icons) is self-hosted, so the page makes no third-party requests.

## Credits

- Bootstrap 5.3.3 (MIT)
- League Spartan and Mulish fonts (SIL OFL), via Fontsource
- Icons: Font Awesome Free 6.7.2 (CC BY 4.0), Academicons Ciência Vitae (SIL OFL), alphaXiv mark from Simple Icons (CC0)

## Deploy

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and pushes `_site` to the `gh-pages` branch. In the repository settings, Pages must be set to *Deploy from a branch → `gh-pages` / root*.

## Local preview

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
