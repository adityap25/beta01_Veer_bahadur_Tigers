import React from 'react'
import CountUp from 'react-countup'

export default function counter() {

    const stats = {
        fontSize: '120px'
    }

    const statsText = {
        fontSize: '35px'
    }

    const boxStyles = {
        borderStyle : 'solid',
        borderWidth : '5px',
        margin : '20px',
        fontSize : '25px',
        boxShadow: "1px 3px 1px grey",
        backgroundColor : '#ea6810',
        color : 'white'
    }

    return (
        <div className="ReactCounter" style={{marginTop : '200px', marginBottom : '200px'}}>
            <div class="container text-center">
                <div class="row">
                    <div class="col" style={boxStyles}>
                        <CountUp start={0} end={568} duration={20} enableScrollSpy={true}>
                            {({ countUpRef }) => (
                                <div style={{fontSize : '150px'}}>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        Families Helped
                    </div>
                    <div class="col" style={boxStyles}>
                        <CountUp start={0} end={2032} duration={20} enableScrollSpy={true}>
                            {({ countUpRef }) => (
                                <div style={{fontSize : '150px'}}>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        Kgs of food donated
                    </div>
                </div>
            </div>

        </div>
    )
}