import './TwitterFollowCard.css';
import { useState } from "react";

export function TwitterFollowCard({ children, username, initialFollowing = false }) {
    const [following, setFollowing] = useState(initialFollowing)

    const buttonText = following ? 'Following' : 'Follow'
    const buttonClassName = following ? 'is-following' : ''

    const handleClick = () => {
        setFollowing(!following)
    }

    return (
        <article className="tw-follow-card">
            <header>
                <img src={`https://unavatar.io/x/${username}`} alt={`Avatar of ${name}`} />
                <div>
                    <strong>{children}</strong>
                    <span>@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="text">{buttonText}</span>
                    <span className="stop-following-text">Stop following</span>
                </button>
            </aside>
        </article>
    )
}
