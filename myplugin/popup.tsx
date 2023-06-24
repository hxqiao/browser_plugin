import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")
  console.log(chrome.tabs.getCurrent());
  
  chrome.tabs.getCurrent().then(res => {
    console.log('好家伙:');
    console.log(res);
    
  })
  var win = chrome.extension.getBackgroundPage();
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 0
      }}>
      <h2>
        我的扩展
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
