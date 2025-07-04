import '../../App.css';

function SlideRule () {

    const baseStyle = {
        width: '90vw',
        height: '90vh'
    }

    return <div className='App'>
        <header className="App-header">
            <div className='textblockContainer' style={baseStyle}>
            <a href='/' style={{display: 'inline-block', width: '10%'}}>Back</a>
            <p style={{display: 'inline-block', width: '90%'}}>Coming Soon...</p>
            </div>
        </header>
    </div>
}

export default SlideRule;