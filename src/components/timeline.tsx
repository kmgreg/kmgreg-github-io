import TimelineEntry from "./timelineEntry";
import { timelineProps } from "../types";

const tlstyle = {
    "listStyleType": "none"
}

export default function Timeline(props: timelineProps) {
    
    const timelineEntries = props.articles.map((article, index) => {
        return <TimelineEntry header={article.header} blockAlignment={index % 2 == 0 ? 'left' : 'right'} date={article.date} contents={article.contents}></TimelineEntry>
    })

    return <ul style={tlstyle}>
        {timelineEntries}
    </ul>
}