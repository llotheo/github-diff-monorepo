chrome.tabs.executeScript(null, { file: 'main.js' }, () => {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError.message)
  }
  chrome.tabs.executeScript(null, { code: 'window.__gdm_prompt()' }, (...res) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message)
    }
  })
})
