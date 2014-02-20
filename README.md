# Introduction

This is a nosejs based template for a web frontend project. It's currently based on grunt, jshint, csslint, requirejs, karma, mocha and chai. It currently targets testing on Windows so probably remove the IE dependency in the karma configuration.

# What's currently working

* Automated guideline checks on js and css files using jshint as csslint with Jenkins compatible reports (see report directory).
* Automated unit testing of js code using karma including coverage reports in Jenkins compatible format (see report directory).
* Automated build using grunt and grunt-contrib-watch.

# TODO

1. Find a way to have jshint write multiple reports (output to console, human readable file and a format that can be used in jenkins). For now there is only checkstyle format - we can at least have our Jenkins reports.
2. Consider concatenating and minifying js and css files.
3. Consider optimizing images for web usage.
4. Consider generating HTML templates for debug (*.js and *.css as is) and production (concatenated and minified).


# How to use it

* install nodejs
* install grunt-cli globally (run "npm install -g grunt-cli")
* clone the repository
* run "npm install" at the toplevel of the cloned repository
* run "grunt" or "grunt-watch"
* enjoy!


# Feedback / Improvements

Feel free to drop me a few lines if you have any suggestions, improvements or fixes. Pull requests are appreciated!