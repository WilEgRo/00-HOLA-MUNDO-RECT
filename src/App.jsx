import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    { 
        userName: 'elenatorro', 
        name: 'Elena Torro',
        isFollowing: true
    },
    { 
        userName: 'midudev', 
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    { 
        userName: 'wilson', 
        name: 'Wilson Hiuga',
        isFollowing: true
    },
    { 
        userName: 'angel', 
        name: 'Ángel Di Maria',
        isFollowing: false
    }
]

export function App() {
   return(
    <>
        <h1>Hola mundo con twitter</h1>
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    </>
   )
}