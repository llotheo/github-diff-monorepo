function main() {
  const fileName = prompt('Please input file path to filter:')
  if (!fileName) {
    return
  }
  ;[...document.getElementsByClassName('file-header')]
    .filter(e => !e.querySelector(`a[title*="${fileName}"]`))
    .forEach(e => {
      const el = e.querySelector('.btn-octicon[aria-expanded="true"]')
      if (el) {
        el.click()
      }
    })
}

window.__gdm_prompt = main
