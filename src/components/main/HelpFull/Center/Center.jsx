import React from 'react'

export default function Center(props) {
    return (
        <div>
            <div class={props.classblock}>
                <img className={props.classicon} src={props.icon}></img>
                <div class="front">
                    <h1 className='back-content con'> <i class={props.i}>  </i>{props.name}&ensp;</h1>
                    <img src={props.img} alt="" className={props.imgClass} />
                </div>

                <div class="back">
                    <div class="back-content con">
                        <h2><i class={props.backI}>  </i>{props.backText1}</h2>
                        <span className={props.CenterBackClassName}><i class={props.backNumber1}>  </i>{props.backText2}</span>
                        <span className={props.CenterBackClassName}><i class={props.backNumber2}>  </i>{props.backText3}</span>
                        <span className={props.CenterBackClassName}><i class={props.backNumber3}>  </i>{props.backText4}</span>
                        <span className={props.CenterBackClassName}><i class={props.backNumber4}>  </i>{props.backText5}</span>
                        <img src={props.backImg} alt="" className={props.backImgFront} />
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}
