---
title: What is patch-package?
author: Sadique Galaria
date: 2020-04-28
hero: ./images/thumbnail.jpg
excerpt: Fix any dependency without hastle
---

As I was scrolling through my youtube feed I came across a video by [Ben Awad](https://twitter.com/benawad) on how he loved this new package he discoved called [patch-package](https://www.npmjs.com/package/patch-package).


Patch-package is a utility package that `lets app authors instantly make and keep fixes to npm dependencies`.

Using patch-package is very simple. All you need to do is (after you are done making changes to the package you intended to fix) run the patch-package cli with `npm ` or `yarn` followed by the dependency/package name.

```json
npx patch-package packagename // Using patch-package with npx
```

```json
yarn patch-package packagename // Using patch-package with yarn
```
That's it. Yes it is that simple!

You will see a folder named `patches` that patch-package has generated with all of the changes that you made to the dependency.

Now for the last step you will have to add a `postinstall` script in your `package.json` file like

```json
"postinstall": "patch-package"// Using patch-package with yarn
```
...and you are all set.

Try uninstalling the package you made changes to and yes don't worry, patch-package will make sure that when you install the package again it applies all the changes that you had previously made to the dependency.

So there you have it. That is how easily you can fix any dependecy or make changes to them without any hastle.



