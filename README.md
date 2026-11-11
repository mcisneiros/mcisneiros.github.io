# mcisneiros.github.io

Personal academic site, built with Jekyll and plain CSS (no theme).

- Content lives in `_data/*.yml` (experience, projects, outputs, education, training, links). Edit those, push, and the site rebuilds.
- Layout: `_layouts/default.html` and `index.html`. Styles: `assets/css/style.css`.
- Photo: add `assets/img/profile.jpg` and set `show_photo: true` in `_config.yml`.
- Deploys to the `gh-pages` branch via `.github/workflows/deploy.yml` (Settings → Pages → Deploy from a branch → `gh-pages` / root).

Local preview: `bundle install && bundle exec jekyll serve`.
