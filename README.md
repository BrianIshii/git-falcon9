[![Build Status](https://travis-ci.org/BrianIshii/git-falcon9.svg?branch=master)](https://travis-ci.org/BrianIshii/git-falcon9)

# git-falcon9
This is a plugin for the [Hyper](https://hyper.is/) terminal that launches a Falcon 9 when you push code and lands when you pull code with Git.

![Alt Text](https://github.com/BrianIshii/git-falcon9/raw/master/Assets/falcon9launch.gif)
![Alt Text](https://github.com/BrianIshii/git-falcon9/raw/master/Assets/falcon9pull.gif)

### Installation
To use this plugin, first install the plugin in your `~/.hyper_plugins`
folder.
```
$ cd ~/.hyper_plugins
$ npm install git-falcon9
```
Then, add the plugin's name in your `~/.hyper.js` file as an item in the
`plugins` array.
```
plugins: [
  "git-falcon9"
],
```
Afterwards, refresh your Hyper terminal with _View > Full Reload_.

If this does not work, restarting your Hyper Terminal might help.

Inspired by [gitrocket](https://github.com/bomanimc/gitrocket), [space-pull](https://github.com/lukaszromerowicz/space-pull) and [SpaceX Falcon 9 Landing CSS](https://codepen.io/simoberny/pen/PEJxPQ)

#### Special launch for very large commits
The max payload for a Falcon 9 is 22.8kB.
Commits larger than 22.8kB may require something special.

![Alt Text](https://github.com/BrianIshii/git-falcon9/raw/master/Assets/falconHeavyLaunch.gif)
