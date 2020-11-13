import { createReducer } from '@reduxjs/toolkit'
import { fetchTicket } from './actions';
import {IState, IError} from 'types';

interface IAction {
  meta: {
    args: undefined
    requestId: string
  }
  type: string
  payload: {
    [ticketName: string]: {
      [ticketData : string] : string
    }
  }
  error: IError
}

const initialState : IState = {
  data: [],
  error: false
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchTicket.fulfilled.type, (state : IState, action : IAction) => {
    return {
      ...state,
      error: false,
      data: Object.entries(action.payload).map( (entry) => ({
        name: entry[0], id: entry[1].id, last: entry[1].last, highestBid: entry[1].highestBid, percentChange: entry[1].percentChange
      }))
    }
  }) 
  builder.addCase(fetchTicket.rejected.type, (state : IState, action : IAction) => {
    console.log(action.error)
    
    return {
      ...state,
      error: true
    }
  })
});

export default reducer