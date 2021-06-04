# Bootstrap 5 theme

## DESCRIPTION

A very basic theme for Drupal 8/9 based on Bootstrap 5.
It lets you override Bootstrap variables and pick and
choose which Bootstrap components you want to include.
It features a Gulp script that compiles SASS into CSS
and "uglifies" JavaScript files.

## INSTALLATION

1. Place this theme into the custom themes directory of
your Drupal 8/9 installation (i.e. `[webroot]/themes/custom/bs5`).

2. In your theme directory, run `npm install` to download
all Node dependecies. They are placed in in
`[webroot]/themes/custom/bs5/node_modules`.

3. In your theme directory, run `gulp`. This will compile
all SASS and JS, move necessary files and start Browsersync.
Please note that Browsersync requires the [Drupal Browsersync
module](https://www.drupal.org/project/browsersync).

4. In your Drupal backend, navigate to **Appearance** and choose
*install and set as default*.

## CUSTOMIZATION

* You can use `style.scss` to enable/disable certain
Bootstrap components that you need for your theme.

* All Bootstrap variables are managed in `_variables.scss`.
Feel free to override whatever you need in this file.
