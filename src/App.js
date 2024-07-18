import React, { useState, useEffect } from 'react'
import tabjson from './json/tab.json'


function App() {
  const [tabnm, setTabnm] = useState('notice');
  useEffect(()=>{
    const buttons = document.querySelectorAll('.tabs button'); // '.tabs button' 어레이형 데이터이기 때문에 map을 사용할 수 없다
    let currentIndex = 0;

    const switchTab = () => {
        buttons[currentIndex].click();
        currentIndex = (currentIndex + 1) % buttons.length;
    };
    const interval = setInterval(switchTab, 3000);

    // 이 컴포넌트가 삭제될때 실행되는 식
    return () => clearInterval(interval); 
}, [])

    // 마운드 ( 화면등장 ) 
    // -> 업데이트(상태변수: 재랜더링으로 컨텐츠변경)
    // -> 언마운트 ( 콘솔 정리하고 삭제 ) 

  return (
    <div className="tabwrap d-flex container border">
      <ul className="tabs">
        <li><button onClick={()=>{setTabnm('notice')}}>{tabjson["notice"]["title"]}</button></li>
        <li><button onClick={()=>{setTabnm('gallery')}}>{tabjson["gallery"]["title"]}</button></li>
        <li><button onClick={()=>{setTabnm('Q&A')}}>{tabjson["Q&A"]["title"]}</button></li>
      </ul>
      <div className="content col border">
        <ul>
        {
          tabjson[tabnm]["content"].map((v, i)=>
          <li key={`list${i}`}>
            {
              v.split("|").map((vv, ii)=>{
                return (
                  // ii === 0 && <h2>{vv}</h2>
                  
                    ii === 0 ? <h2>{vv}</h2> : <p>{vv}</p>
                  
                )
              })
            }
          </li>
          )
        }
        </ul>
      </div>
    </div>
  )
}

export default App
