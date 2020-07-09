import React, { useEffect, useState } from "react";
import PostItem from "./PostItem"


const Posts = ({ posts }) => {

    return (

        <React.Fragment>
            <div className="post header clearfix">
                <div className="post_comment-count">
                    Comments
                </div>
                <div className="post_comment-count">
                    Vote Count
                </div>
                <div className="post_comment-upvote">
                    Up vote
                </div>
                <div className="post_comment-info">
                    News Detail
                </div>
            </div>


            {posts ? posts.map((post, i) => {
                return <PostItem
                    key={post.objectID}
                    objectID={post.objectID}
                    num_comments={post.num_comments}
                    title={post.title}
                    url={post.url}
                    author={post.author}
                    created_at={post.created_at}
                    points={post.points}

                />;
            }) : "Loading"}


        </React.Fragment>
    )
}

export default Posts;