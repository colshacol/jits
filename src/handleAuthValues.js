export const handleAuthValues = (conf, flags) => {
	if (flags.setUser) {
		global.jitsLog('set username.')
		conf.set('username', flags.setUser)
		flags.user = flags.setUser
	}

	if (flags.setPass) {
		global.jitsLog('set password.')
		conf.set('password', flags.setPass)
		flags.pass = flags.setPass
	}
	
	if ((flags.setPass && !flags.setUser) || (flags.setUser && !flags.setPass)) {
		return
	}

	flags.user = flags.user || conf.get('username')
	flags.pass = flags.pass || conf.get('password')

	!flags.user && (throw new Error('No username provided or previously set.'))
	!flags.pass && (throw new Error('No password provided or previously set.'))
}
