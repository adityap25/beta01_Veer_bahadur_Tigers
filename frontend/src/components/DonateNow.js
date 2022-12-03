
export default function DonateNow () {

    const styles = {
        marginTop : '100px',
        marginBottom : '100px',
    }

    const buttonStyles = {
        height : '250px',
        width : '500px',
        margin : '50px',
        borderRadius : '20px',
        fontSize : '50px',
        fontWeight : '700',
        borderWidth : '0',
        backgroundColor : '#144dc1',
        color : 'white'
    }

    return (
        <div className = "Donate">
            <a href="/donate">
            <button style={buttonStyles}>Donate Now and help our cause!</button>
            </a>
        </div>
    )
}