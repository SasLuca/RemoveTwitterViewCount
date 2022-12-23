# RemoveTwitterViewCount
[![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)](https://github.com/SasLuca/RemoveTwitterViewCount/master/LICENSE)
![Maintenance intention for this crate](https://img.shields.io/badge/maintenance-actively--developed-brightgreen.svg)

A simple plugin that removes the Twitter view counters added by Musk recently.
No longer will you be ratioed by your views!

The plugin observes any changes to the DOM and uses css selectors and xpath queries combined with heuristics from inspecting twitter's code to remove the div elements of the view counters from the page.

Report any issues or incompatibilities in the issues section.

# Manually add to Chrome

The plugin is currently under review to be added to the Chrome Webstore, for now however you must manually add it which is not too hard!

1. Download the latest [release](https://github.com/SasLuca/RemoveTwitterViewCount/releases/tag/v0.1.0)
2. Unzip the folder.
3. Goto `chrome://extensions` by typing `chrome://extensions` in your search bar and clicking enter.
4. Click the "Load Unpacked" button in the top left corner and select the folder you just unzipped.
5. Enjoy!
