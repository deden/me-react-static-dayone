
export default entry => {
  const title = entry.text.slice(0, entry.text.indexOf('\n')).trim()
  const body = entry.text.slice(entry.text.indexOf('\n')).trim()
  const url = title.replace(/[^a-z0-9]/gi, '_').toLowerCase()
  return {
    ...entry,
    title,
    body,
    url,
  }
}
