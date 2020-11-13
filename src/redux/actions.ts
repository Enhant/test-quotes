import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTicket = createAsyncThunk('returnTicket', async () => {
    const res = await fetch('https://poloniex.com/public?command=returnTicker');
    const json = await res.json();
    return json;
});
