import meow from 'meow'
import emoji from 'node-emoji'

const helpMessage = `
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
  
`

export const argsTool = meow(helpMessage, {
	description: emoji.emojify('jits :violin:  A cli tool to create rawGit hosted Gists from your terminal.'),
	booleanDefault: null,
	flags: {
		file: {
				type: 'string',
				alias: 'F'
		},
		dir: {
			type: 'string',
			alias: 'D'
		},
		user: {
			type: 'string',
			alias: 'U'
		},
		pass: {
			type: 'string',
			alias: 'P'
		},
		setUser: {
			type: 'string',
			alias: 'SU'
		},
		setPass: {
			type: 'string',
			alias: 'SP'
		}
	}
})