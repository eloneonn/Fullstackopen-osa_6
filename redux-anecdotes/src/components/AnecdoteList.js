import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        return state.anecdotes.filter(a => a.content.includes(state.filter))
    })

    console.log(anecdotes);

    const addVote = (anecdote) => {
        dispatch(vote(anecdote))
        dispatch(setNotification(`You voted for "${(anecdotes.find(e => e.id === anecdote.id).content)}"`, 2))
      }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => addVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList