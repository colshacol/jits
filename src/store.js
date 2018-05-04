export const store = (() => {
	const _store = {}

	const set = (name, value) => {
		_store[name] = value;
	}

	return _store
})()