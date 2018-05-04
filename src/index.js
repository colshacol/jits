#!/usr/bin/env node

import octokit from '@octokit/rest'
import clipboard from "copy-paste"
import emoji from 'node-emoji'
import chalk from 'chalk'

import { argsTool } from './argsTool'
import { pluckGist } from './pluckGist'
import { createGistOptions } from './createGistOptions'
import { handleAuthValues } from './handleAuthValues'
import { store } from './store'

const Conf = require('conf');
const conf = new Conf();

const github = octokit()

const jitsLog = (message) => console.log('\n', emoji.emojify('jits :violin: '), chalk.hex('#C67FF8')(message), '\n')

global.jitsLog = jitsLog

const authenticate = (username, password) => {
	return github.authenticate({
		type: 'basic',
		username,
		password,
	})
}

const getFileName = (file) => {
	return file.substr(file.lastIndexOf('/') + 1)
}

const main = async (input, flags) => {
	// TODO: Validate args.

	handleAuthValues(conf, flags)
	if (!flags.file) return;

	authenticate(flags.user, flags.pass)
	flags.filename = getFileName(flags.file)
	const options = createGistOptions(flags)
	const gistData = await github.gists.create(options)
	const gist = pluckGist(flags, gistData)

	clipboard.copy(gist.rawGitUrl, function () {
		jitsLog('rawGit url copied to clipboard.')
	})
}

main(argsTool.input, argsTool.flags)