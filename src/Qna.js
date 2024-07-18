import React, { Fragment, useEffect } from 'react';
import qnalist from './json/qna.json';

const { qna } = qnalist;

function Qna(props) {
    // useEffect(() => {
    //     const dts = document.querySelectorAll("#qna dt");

    //     const dtsclick = (num) => {
    //         if (dts[num]) {
    //             dts.forEach((v, i) => {
    //                 v.classList.remove('on');
    //             });
    //             dts[num].classList.add('on');
    //         }
    //     };

    //     // 초기에 첫 번째 항목을 선택하도록 호출
    //     dtsclick(0);
    // }, []);

// ---------------------------------------------------------------------------       
        // const dts = document.querySelectorAll("#qna dt");
        // dts[0].addEventListener('click', ()=>{
        //     dts[0].classList.add('on');
        // })
        // dts[0].click();

//----------------------------------------------------------------------------

        // document.querySelector("#qna dt:nth-child(1)").classList.add('on')

    const dtsclick = (num) => {
        const dts = document.querySelectorAll("#qna dt");
        if (dts[num]) {
            dts.forEach((v, i) => {
                v.classList.remove('on');
            });
            dts[num].classList.add('on');
        }
    };

    return (
        <dl className='container my-5' id={props.keynm}>
            {
                qna.map((v, i) => (
                    <Fragment key={`qnalist${i}`}>
                        <dt className={`bg-dark text-white ${i === 0 ? 'on' : null }`} onClick={() => dtsclick(i)}>{v.Q}</dt>
                        <dd className='py-5'>{v.A}</dd>
                    </Fragment>
                ))
            }
        </dl>
    );
}

export default Qna;