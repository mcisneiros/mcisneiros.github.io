# mcisneiros.github.io

Personal academic site. Built with Jekyll on top of the [Start Bootstrap "Resume"](https://startbootstrap.com/theme/resume) template (MIT, see `LICENSE-startbootstrap-resume`).

- Content lives in `_data/*.yml` (experience, projects, outputs, education, training, links). Edit those, push, and the site rebuilds.
- Page markup: `index.html`. Template styles and script: `assets/css/styles.css`, `assets/js/scripts.js`.
- Photo: add `assets/img/profile.jpg` and set `show_photo: true` in `_config.yml`.
- Deploys to the `gh-pages` branch via `.github/workflows/deploy.yml` (Settings → Pages → Deploy from a branch → `gh-pages` / root).

Local preview: `bundle install && bundle exec jekyll serve`.
