
export function TwitterFollowCard({ name, userName, isFollowing}) {
    const imgSrc = `https://unavatar.io/${userName}`;

    return (
        <article>
            <header>
                <img 
                    src={imgSrc}
                    alt="foto" 
                />
                <div>
                    <strong>{name}</strong> <br/>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button>{isFollowing}</button>
            </aside>
        </article>
    )
}