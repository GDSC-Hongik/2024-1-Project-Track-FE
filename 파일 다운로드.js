function copyTextToClipboard() {
  // XPath를 사용하여 span 요소를 선택합니다.
  var span = document.evaluate('//*[@id="root"]/div[1]/div[2]/div[1]/div[3]/div/div/div[1]/div[2]/div/div/div/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  if (span) {
      // 요소의 텍스트를 가져옵니다.
      var text = span.textContent;

      // 클립보드에 텍스트를 저장합니다.
      navigator.clipboard.writeText(text).then(function() {
          console.log('텍스트가 클립보드에 저장되었습니다: ' + text);
          // 텍스트가 클립보드에 저장된 후 이벤트 리스너를 제거합니다.
          document.removeEventListener('click', copyTextToClipboard);

          var button = document.querySelector("#root > div.ClassroomViewer_container__ZbO5r > div.ContentLayout_container__HBx66.ContentLayout_isSideViewOpen__Pli1k > div.ContentLayout_contentWrapper__e8KpN > div.ContentLayout_exercise__Aiuao > div > div > div.CodeEditorLayout_explorerWrapper__WuHkO > div.FileExplorer_container__eF5e5 > div > div.FileExplorerItem_container__qFTtB.FileExplorerItem_isFolderOpened__tUpVb > div > div.FileExplorerItem_menu__R_N6Q > div > div > div.Dropdown_bottomSheet__ZfcC3 > div > div > button")
          // JSPath를 사용하여 요소를 선택합니다.

          // 요소가 존재하면 클릭 이벤트를 발생시킵니다.
          if (button) {
              button.click();
              console.log('버튼을 클릭했습니다.');
          } else {
              console.error("버튼을 찾을 수 없습니다. XPath를 확인하세요.");
          }

      }).catch(function(err) {
          console.error('클립보드에 텍스트를 저장하는데 실패했습니다: ', err);
      });
  } else {
      console.error("span 요소를 찾을 수 없습니다. XPath를 확인하세요.");
  }
}

// 페이지에 클릭 이벤트 리스너를 추가합니다.
document.querySelector("#split-view-handle-button").click();
document.addEventListener('click', copyTextToClipboard);

clear();