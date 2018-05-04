# jits 🎻

A cli tool to create rawGit hosted Gists from your terminal.

## Motivation

At work we have gotten into the swing of demoing changes to our component library on CodeSandbox. When one of us
submits a PR for the component library, we always take the built bundle to CodeSandbox and create a live example
to show our changes working and to prove that we didn't break shit.

_It becomes quite tedious to build, copy, paste._  

So instead of wasting 12 minutes a day dealing with that bullshit, I spent 6 hours building this bullshit.

```sh
# install the shit
npm i -g jits

# use the shit
jits --help
```

## Usage


> See, my damie, Pootie Tang don't wa-da-tah to the shama cow... 'cause thats a cama cama leepa-chaiii, dig?

### What jits will do for you:
- Upload a file into a new Github Gist.
- Run that Gist through RawGit.
- Put the link in your clipboard.

_But it is not about what jits can do for you, it is what you can do for yourself._

Now, you run on and paste that url into a `<script>` tag in CodeSadnbox or some shit, ya hear?

Alright, I'm officially too tired and need to finish these docs another day...

```sh
# usage:

  jits [options]

# options:

  --file, -F          # The path to the file you wish to upload.
  --dir, -F           # [no workie yet] The path to the directory you wish to upload.

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

Follow me on [Twitter](https://twitter.com/colshacol), dammit. I've gotta come up with like 20,000 more followers to get Ken Wheeler status.