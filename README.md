# mcisneiros.github.io

Personal academic site. Built with Jekyll on top of the [Bootstrap 5 with a custom layout.

- Content lives in `_data/*.yml` (experience, projects, outputs, education, training, links). Edit those, push, and the site rebuilds.
- Page markup: `index.html`. Styles and script: `assets/css/site.css`, `assets/js/site.js`.
- Photo: add `assets/img/profile.jpg` and set `show_photo: true` in `_config.yml`.
- Deploys to the `gh-pages` branch via `.github/workflows/deploy.yml` (Settings → Pages → Deploy from a branch → `gh-pages` / root).

Local preview: `bundle install && bundle exec jekyll serve`.
