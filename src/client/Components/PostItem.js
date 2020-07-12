import React from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "../store/actions/index";

const PostItem = ({ num_comments, points, title, url, author, created_at, objectID }) => {
    const dispatch = useDispatch();

    const hidePost = (e) => {

        dispatch(actionCreators.hidePost(objectID));
    }
    const upVote = () => {
        dispatch(actionCreators.upVote(objectID));
    }
    return <div className="post clearfix">
        <div className="post_comment-count">
            {num_comments ? num_comments : 0}
        </div>
        <div className="post_comment-count">
            {points ? points : 0}
        </div>


        <div className="post_comment-upvote">
            <button title="Up vote" onClick={(objectID) => upVote(objectID)}>
                <span></span>
            </button>
        </div>
        <div className="post_comment-info">
            {title}
            <span className="post-url">({url ? url.split('/')[2] : ""}) by </span>{author}
            <span className="post-url">{parseInt((Date.now() - new Date(created_at)) / 3600000)} Hours ago</span>
            <button className="hidepost" onClick={(objectID) => hidePost(objectID)}>[Hide]</button>
        </div>
    </div>
}
export default PostItem;