function main() {
  const pattern = prompt('Please input file path to filter [regex]:')
  if (!pattern) {
    return
  }
  const removedFileNames = Array.from(document.getElementsByClassName('js-details-container'))
    .map(el => {
      const header = el.getElementsByClassName('file-header')[0]
      if (!header) {
        return false
      }
      return {
        el,
        fileName: header.innerText.split(' ')[3],
      }
    })
    .filter(Boolean)
    .filter(({ fileName }) => !new RegExp(pattern).test(fileName))
    .map(({ el, fileName }) => {
      el.style.display = 'none'
      return fileName
    })

  const modal = document.createElement('div')
  modal.style.position = 'fixed'
  modal.style.backgroundColor = '#333'
  modal.style['max-width'] = '200px'
  modal.style['max-height'] = '400px'
  modal.style['overflow'] = 'scroll'
  modal.style['white-space'] = 'nowrap'
  modal.style.padding = '8px'
  modal.style.bottom = '0'
  modal.style.left = '0'
  modal.style.color = '#fff'
  modal.style['z-index'] = 10000
  const innerText = `Removed files(${removedFileNames.length}):

${removedFileNames.join('\n')}`
  modal.innerText = innerText

  document.body.appendChild(modal)
}

window.__gdm_prompt = main
