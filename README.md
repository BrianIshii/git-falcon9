# git-falcon9
This is a plugin for the [Hyper](https://hyper.is/) terminal that launches a Falcon 9 when you push code and lands when you pull code with Git.

![Alt Text](https://github.com/BrianIshii/git-falcon9/raw/master/falcon9push.gif)
![Alt Text](https://github.com/BrianIshii/git-falcon9/raw/master/falcon9pull.gif)
![Alt Text](https://github.com/BrianIshii/git-falcon9/raw/master/falconHeavyLaunch.gif)

### Installation
To use this plugin, first install the plugin in your `~/.hyper_plugins`
folder.
```
$ cd ~/.hyper_plugins
$ npm install gitrocket
```
Then, add the plugin's name in your `~/.hyper.js` file as an item in the
`plugins` array.
```
plugins: [
  "gitrocket"
],
```
Afterwards, refresh your Hyper terminal with _View > Full Reload_.

If this does not work, restarting your Hyper Terminal might help.

Inspired by [gitrocket](https://github.com/bomanimc/gitrocket), [space-pull](https://github.com/lukaszromerowicz/space-pull) and [SpaceX Falcon 9 Landing CSS](https://codepen.io/simoberny/pen/PEJxPQ)
