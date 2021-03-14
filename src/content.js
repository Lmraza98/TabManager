


changeColor.addEventListener("click", async () => {
    function setPageBackgroundColor() {
        chrome.storage.sync.get("color", ({ color }) => {
            document.body.style.backgroundColor = color;
        });
        }
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
// The body of this function will be executed as a content script inside the
// current page
