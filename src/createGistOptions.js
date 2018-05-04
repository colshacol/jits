import { readFile } from './readFile'

export const createGistOptions = (flags) => {
	return {
		files: {
			[flags.filename]: {
				content: readFile(flags.file)
			}
		},

		description: flags.desription,
		public: true
	}
}