export const pluckGist = (flags, gist) => {
	return {
		url: gist.data.html_url,
		rawGitUrl: gist.data.files[flags.filename].raw_url.replace('gist.githubusercontent', 'rawgit'),
		file: gist.data.files[flags.filename],
		get __original() {
			return gist
		}
	}
}