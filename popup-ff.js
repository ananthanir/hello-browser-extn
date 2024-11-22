document.getElementById("open-tab").addEventListener("click", () => {
    browser.tabs.create({
      url: browser.runtime.getURL("tab.html") // Open the tab.html page in a new tab
    });
  });
  