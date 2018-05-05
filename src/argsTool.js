import meow from 'meow'
import emoji from 'node-emoji'

const helpMessage = `
# usage:

  jits [options]

# options:

  --file, -f          # The path to the file you wish to upload.
  --dir, -f           # [no workie yet] The path to the directory you wish to upload.

  --user, -u          # The Github username to use for authentication.
  --pass, -p          # The Github password to use for authentication.

  --set-user, -su     # Set and persist your Github username.
  --set-pass, -sp     # Set and persist your Github password.

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
	description: emoji.emojify('jits :violin:  A cli tool to create RawGit hosted Gists from your terminal.'),
	booleanDefault: null,
	flags: {
		file: {
				type: 'string',
				alias: 'f'
		},
		dir: {
			type: 'string',
			alias: 'd'
		},
		user: {
			type: 'string',
			alias: 'u'
		},
		pass: {
			type: 'string',
			alias: 'p'
		},
		setUser: {
			type: 'string',
			alias: 'su'
		},
		setPass: {
			type: 'string',
			alias: 'SP'
		}
	}
})