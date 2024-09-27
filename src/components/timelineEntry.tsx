import { timelineEntryProps } from "../types"

export default function TimelineEntry (props: timelineEntryProps) {

    const listyle = {
        width: '50vw'
    }

    const textBlockStyle = {
        margin: '25px 25px 25px 25px',
        TextWrap: 'wrap'
    }

    return <li className={'timelineEntry textblockContainer ' + props.blockAlignment} style={listyle}>
        <article>
            <header>
                <h1>{props.header}</h1>
                <h3>{props.date}</h3>
            </header>
            <div style={textBlockStyle}>{props.contents}</div>
        </article>
    </li>
}