import fs from 'node:fs'

export function gitIgnoredPatterns() {
  const content = fs.readFileSync('.gitignore', 'utf8')
  console.log(content)
}
