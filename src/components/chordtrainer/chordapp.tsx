import '../../App.css';

import Chord from '@techies23/react-chords'
import { useState } from 'react';

function ChordApp () {

    const baseStyle = {
        width: '90vw',
        height: '90vh'
    }

    const chordStyle = {
        transform: 'scale(0.5)'
    }

    const [activeChord, setActiveChord] = useState({
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: false,
    });
    const [activeInstrument, setActiveInstrument] = useState({
        strings: 6,
        fretsOnChord: 4,
        name: "Guitar",
        keys: [],
        tunings: {
        standard: ["E", "A", "D", "G", "B", "E"],
        },
    })

    return <div className='App'>
        <header className="App-header">
        <div className='textblockContainer' style={baseStyle}>
            <a href='/' style={{display: 'inline-block', width: '10%'}}>Back</a>
            <p style={{display: 'inline-block', width: '90%'}}>Coming Soon...</p>
            <div style={{height: '400px', width: '200px', background: 'white', margin: 'auto'}}>
                <Chord chord={activeChord} instrument={activeInstrument} lite={true}/>
            </div>
        </div>
        </header>
    </div>
}

export default ChordApp;