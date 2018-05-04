# jits 🎻

A cli tool to create RawGit hosted Gists from your terminal.

![demo picture thing](https://image.ibb.co/gghUPS/Screen_Shot_2018_05_04_at_3_40_23_AM.png)

## Motivation

At work we have gotten into the swing of demoing changes to our component library on [CodeSandbox](https://codesandbox.io). When one of us submits a PR for the component library, we always take the updated Webpack bundle to CodeSandbox and create a live example to show our changes working and to prove that we didn't break shit.

_It becomes quite tedious_ to build, go find the `bundle.js` in the build directory, wait patiently as my editor fights for its life to open such a large file, copy the whole damn thing, head to CodeSandbox, create a new file, paste in the bundle, and wait patiently as CodeSandbox fights for its life to handle such a large file.

So I created jits to smooth this process out by automating the hard part. :) jits will upload a file into a new Github Gist, run the Gist through RawGit so that it is served with the correct mime-types and all that jazz, and then provide you with the url to the file, conveniently placed in your clipboard.

## Usage

> See, my damie, Pootie Tang don't wa-da-tah to the shama cow... 'cause thats a cama cama leepa-chaiii, dig?

```sh
# install the thing
npm i -g jits

# use the thing
jits --help
```

*Yep*, jits is one of dem' dependencies that you install globally. Sorry, not sorry.

There are a lot of features on the unwritten roadmap for jits, but currently it supports a limited number of features. _Well_, actually, it only has one feature: Taking in a path to a file and doing gangsta shit with that file.

That said, jits is a joy to use, because, like Ken Wheeler says, _when you ain't start none, there won't be none._

```sh
# usage:

  jits [options]

# options:

  --file, -F          # The path to the file you wish to upload.
  --dir, -D           # [no workie yet] The path to the directory you wish to upload.
	
  # In regards to providing paths to jits, the path must be relative to your package.json.

  --user, -U          # The Github username to use for authentication.
  --pass, -P          # The Github password to use for authentication.

  --set-user, -SU     # Set and persist your Github username.
  --set-pass, -SP     # Set and persist your Github password.

# examples:

  # Upload a file and provide authentication data.
  jits -f dist/js/bundle.js -u joedirt12 -p digit1234

  # Provide username for future usage by jits.
  jits --set-user joedirt12

  # Provide password for future usage by jits.
  jits --set-pass digit1234

  # Upload a file simply, relying on previously set authentication data.
  jits -f dist/js/bundle.js
```

## Notes

_I don't know if anybody will ever read this._

_If you are reading this_, that means I have probably been dead and gone for a long time now. I don't
know who you are, what you look like, or even how old you are. But I do know that this tool will save
you a few minutes of work in your lifetime.

If you stumble upon this repo, use the tool, and have an issue... do that thing you do when you have an
issue. I may or may not continue to maintain this tool, as most of my tools are never discovered and I
always have a bad ass new idea every day, so sticking to one project that nobody gives a damn is quite
a task for me.

Follow me on [Twitter](https://twitter.com/colshacol), dammit. I've gotta come up with like 20,000 more followers to get JavaScript Kanye status.
