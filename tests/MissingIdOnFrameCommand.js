module.exports = {
  showMissingIdError: (client) => {
    
    const elementOutSideOfIFrame = '#Result_2'; // Title 'Result' just above iframe element on page
    
    const iframeId = 'frame_Example2';
    const deeperIframeId = 'Example2';
    const elementWithinIFrame = '#mapDiv';
    
    client.
      url(client.launch_url).
      waitForElementVisible(elementOutSideOfIFrame).
      frame(iframeId).
      frame(deeperIframeId).
      waitForElementVisible(elementWithinIFrame). 
      frame(null). // Error while running .switchToFrame() protocol action: invalid argument: missing 'id'
      frame(). // Error while running .switchToFrame() protocol action: invalid argument: missing 'id'
      waitForElementVisible(elementOutSideOfIFrame).
      waitForElementNotVisible(elementWithinIFrame);
  },
};
