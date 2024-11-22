document.getElementById("open-tab").addEventListener("click", () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("tab.html") });
  });
  