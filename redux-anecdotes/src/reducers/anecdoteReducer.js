import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const mappedState = state.map(object => object.id !== action.payload.id ? object : action.payload)
      
      return mappedState.sort(function(a, b){return b.votes - a.votes})
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload.sort(function(a, b){return b.votes - a.votes})
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()

    dispatch(setAnecdotes(anecdotes))
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    const votedObj = {...anecdote}
    votedObj.votes++

    await anecdoteService.update(votedObj)

    dispatch(addVote(votedObj))
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    const newObj = await anecdoteService.createNew(content)

    dispatch(appendAnecdote(newObj))
  }
}

export const { addVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer