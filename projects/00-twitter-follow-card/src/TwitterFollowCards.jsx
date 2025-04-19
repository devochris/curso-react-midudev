import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function TwitterFollowCards ({ users }) {
  return (
    <article className='tw-follow-cards'>
      {
        users.map((user) => {
          const { username, name, following } = user

          return (
            <TwitterFollowCard key={username} username={username} initialFollowing={following}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </article>
  )
}
