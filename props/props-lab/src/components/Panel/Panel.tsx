import type { ReactNode } from "react";


export interface PanelProps {
    readonly title: ReactNode
    readonly actions?: ReactNode
    readonly children: ReactNode
}


export function Panel({title, actions, children}: PanelProps){
    return (
        <section>
            <header>{title}{actions}</header>
            <div>{children}</div>
        </section>
    )
} 