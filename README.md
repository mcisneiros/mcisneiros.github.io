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

A link that has no icon in Font Awesome or Academicons can use an image instead: give it `img: /assets/img/<file>.svg` in `links.yml`.

## Deploy

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and pushes `_site` to the `gh-pages` branch. In the repository settings, Pages must be set to *Deploy from a branch → `gh-pages` / root*.

## Local preview

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
