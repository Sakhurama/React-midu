import { useState } from "react";

export function TwitterFollowCard({ name, userName}) {
    const imgSrc = `https://unavatar.io/${userName}`;
    const [isFollowing, setIsFollowing] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const Follow = () => {
        setIsFollowing(!isFollowing);
    }
    return (
        <article className="flex items-center gap-6">
            <header className="flex items-center justify-center gap-3">
                <img 
                    src={imgSrc}
                    alt="foto"
                    className="w-16 h-16 rounded-full"
                />
                <div>
                    <strong>{name}</strong> <br/>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside className="ml-auto">
                <button 
                    onClick={Follow}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className={`${isFollowing && "hover:bg-red-500 bg-[#131313]"} w-40 h-12 border-2 border-white rounded-lg text-white font-semibold cursor-pointer`}
                >
                    {isFollowing && isHover ? "Dejar de seguir" : isFollowing ? "Siguiendo" : "Seguir"}
                </button>
            </aside>
        </article>
    )
}