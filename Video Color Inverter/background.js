chrome.action.onClicked.addListener((tab) => {
  // Executes the script across the page and any embedded iframes 
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    function: toggleInvert
  });
});

function toggleInvert() {
  const videos = document.querySelectorAll('video');
  
  videos.forEach(video => {
    // If the video is already inverted, switch it back. Otherwise, invert it!
    if (video.style.filter === 'invert(1)') {
      video.style.filter = 'none';
    } else {
      video.style.filter = 'invert(1)';
    }
  });
}
