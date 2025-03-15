import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {
    return (
        <>
        <aside className="flex flex-col gap-4">
            <TwitterFollowCard userName={"midudev"} name={"Miguel Ángel Díaz"} />
            <TwitterFollowCard userName={"danimitad"} name={"Daniel Romero"} />
        </aside>
        </>
    )
}