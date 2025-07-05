import { useState } from 'react';
import {scales, chords} from './scales';

import '../../App.css';

function SlideRule () {

    const baseStyle = {
        width: '90vw',
        height: '90vh'
    }
    
    const noteNameStyle = {
        display: 'inline-block',
        width: '70px',
        marginLeft: '15px',
        marginRight: '30px'
    }

    const noteNames = [['A'], ['A#\nBb'], ['B'], ['C'], ['C#\nDb'], ['D'], ['D#\nEb'], ['E'], ['F'], ['F#\nGb'], ['G'], ['G#\nAb']]
    const majorKeys = {'A': 0, 'Bb': 1, 'B': 2, 'C': 3, 'Db': 4, 'D': 5, 'Eb': 6, 'E': 7, 'F': 8, 'Gb': 9, 'G': 10, 'Ab': 11}
    const minorKeys = {'F#': 0, 'G': 1, 'G#': 2, 'A': 3, 'Bb': 4, 'B': 5, 'C': 6, 'C#': 7, 'D': 8, 'Eb': 9, 'E': 10, 'F': 11}

    const keyOrderMajor = Object.keys(majorKeys)
    const keyOrderMinor = Object.keys(minorKeys)

    const [currentKey, setCurrentKey] = useState(0);

    const onArrowClicked = (dir: number) => {
        setCurrentKey((12 + (currentKey + dir)) % 12);
    }

    const getNote = (interval: number, lastInterval?: number) : string => {
        let nameToUse = 0;
        if (lastInterval) nameToUse = (interval - lastInterval % 2)
        let nameArray = noteNames[(currentKey + interval) % 12]
        nameToUse = nameToUse % nameArray.length
        return nameArray[nameToUse]
    }

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
            onArrowClicked(1)
        } else if (event.key === 'ArrowLeft') {
            onArrowClicked(-1)
        }
    }

    const generateScaleRow = (scale: any) => {
        const scaleEntries = [];
        let current = -1;
        for (let i = 0; i < scale.intervals.length; i += 1) {
            if (current != scale.intervals[i] - 1) {
                const diff = scale.intervals[i] - current - 1
                for (let c = 0; c < diff; c += 1) {
                    scaleEntries.push(<li className={'ScaleBlock empty'}></li>)
                }
            }
            scaleEntries.push(<li className={'ScaleBlock'}>{getNote(scale.intervals[i])}</li>)
            current = scale.intervals[i]
        }
        return scaleEntries
    }

    const scalesLists = scales.map(scale => {
       return generateScaleRow(scale)
    })

    const chordLists = chords.map(chord => {
        return generateScaleRow(chord)
    })

    return <div className='App' tabIndex={0} onKeyDown={onKeyDown}>
        <header className="App-header">
            <div className='textblockContainer' style={baseStyle}>
                <a href='/' style={{display: 'inline-block', width: '10%'}}>Back</a>
                <p style={{display: 'inline-block', width: '90%'}}>Coming Soon...</p>
                <h1>
                    <button className={'SlideButton'} onMouseDown={() => onArrowClicked(-1)}>&lt;</button>
                    <span style={noteNameStyle}>{keyOrderMajor[currentKey]}</span>
                    <button className={'SlideButton'} onMouseDown={() => onArrowClicked(1)}>&gt;</button>
                </h1>
                <div style={{display: 'flex'}}>
                    <div style={{width: '48%', height: '100%', background: 'white', margin: '10px 10px 10px 10px'}}>
                        <h4>Scales</h4>
                        <ul className='ScaleRow'>{scalesLists[0]}</ul>
                    </div>
                    <div style={{width: '48%', height: '100%', background: 'white', margin: '10px 10px 10px 10px'}}>
                        <h4>Chords and Arpeggios</h4>
                        <ul className='ScaleRow'>{chordLists[0]}</ul>
                    </div>
                </div>
            </div>
        </header>
    </div>
}

export default SlideRule;