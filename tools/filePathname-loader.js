module.exports = async function(src) {
  const callback = this.async()

  return callback(
    null,
    `export const filePathname = '${this.resourcePath.slice(
      process.cwd().length
    )}'\n\n` + src
  )
}
