import React from 'react'

export default function OurMission() {

    const styles = {
        backgroundColor: "#ea6810",
        paddingTop: '50px',
        paddingBottom: '50px',
        marginTop: '200px',
        marginBottom: '200px',
        color: 'white'
    }

    const stylesRow = {
        paddingTop: '30px',
        paddingBottom: '30px',
        // paddingRight : '50px',
        // paddingLeft : '50px',
        marginLeft: '150px',
        marginRight: '150px'
    }

    const missionHeadingStyles = {
        fontSize: '50px',
        fontWeight: '700',
        textAlign: 'center'
    }

    return (
        <div className="GoalsAndMission" style={styles}>

            <div className="missionHeading" style={missionHeadingStyles}>
                Our Mission
            </div>

            <div className="container">
                <div className="row" style={stylesRow}>
                        <div className="col" style={{ textAlign: 'right' }}>
                            <h4>WHY WE EXIST</h4>
                            We aim to eradicate hunger at the basic level. Through our efforts, we want to ensure that the voices of the malnourished and the hungry in India are heard and their needs are satisfied.
                        </div>
                        <div className="col" style={{ textAlign: 'left' }}>
                            <h4>OUR PURPOSE</h4>
                            Our purpose is to feed those who struggle to feed themselveds. Through our food distribution network, we connect donors with those who need the feed the most
                        </div>
                </div>

            </div>

        </div>
    )
}