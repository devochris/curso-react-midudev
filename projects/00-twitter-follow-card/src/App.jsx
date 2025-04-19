import { useUsers } from './hooks/useUsers.js'
import { TwitterFollowCards } from './TwitterFollowCards.jsx'

export function App () {
  const users = useUsers()

  return (
    <section>
      <TwitterFollowCards users={users} />
    </section>
  )
}
