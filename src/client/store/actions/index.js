import axios from "axios";
export const FETCH_POST="FETCH_POST";
export const POST_UPVOTE="POST_UPVOTE";
export const HIDE_POST="HIDE_POST";


export const fetchPost=(pageNumber)=> async (dispatch, getState, api)=>{
  let page =pageNumber?pageNumber:1;
  const res =await axios.get(`https://hn.algolia.com/api/v1/search?page=${page}`)

    dispatch({
        type:FETCH_POST,
        payload: res.data

    })
}
export const upVote=(objectID)=> async (dispatch, getState, api)=>{


    dispatch({
        type:POST_UPVOTE,
        payload:objectID

    })
}

export const hidePost =(objectID)=> async (dispatch, getState, api)=>{


    dispatch({
        type:HIDE_POST,
        payload:objectID

    })
}