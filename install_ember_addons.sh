#!/bin/sh
# I used this shell script to install all the extra dependencies that this add-on
# requires.  This way when I upgrade ember-cli and work through the painful process
# I can quickly add all of the dependencies to their correct scopes.

yarn add ember-cli-node-assets

yarn add --dev sugar-date

ember install ember-cli-release

#ember install ember-cli-app-version
#ember install ember-cli-bootstrap3-sass
#ember install ember-cli-date-textbox
#ember install ember-cli-deploy
#ember install ember-cli-deploy-build
#ember install ember-cli-deploy-gzip
#ember install ember-cli-deploy-s3
#ember install ember-cli-document-title
#ember install ember-cli-font-awesome-sass

#ember install ember-helper-locale-number

#ember install ember-moment

#npm install --save-dev bootswatch@3.3
