import path from 'path'
import fs from 'fs'

export const readFile = (filePath) => {
	const absolutePath = path.resolve(process.cwd(), filePath)
	const file = fs.readFileSync(absolutePath, 'utf8')
	return file
}