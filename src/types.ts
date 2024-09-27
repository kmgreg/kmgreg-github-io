import { ReactElement } from "react"

export type bannerHeaderProps = {
    text: string,
    image: string,
    textColor: string
}

export type tabProps = {
    tabName: string
}

export type timelineEntryProps = {
    header: string,
    blockAlignment: string,
    date: string,
    contents: ReactElement
}

export type articleData = {
    header: string,
    date: string,
    contents: ReactElement
}

export type timelineProps = {
    articles: articleData[]
}