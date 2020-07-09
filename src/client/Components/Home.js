import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Posts from "./Posts";
import Graph from "./Chart"
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../store/actions/index"

let pagenum;
const Home = () => {
    const { pageNumber } = useParams();

    const posts = useSelector(state => state.user);
    const [pagePost, setPagePost] = useState();

    const dispatch = useDispatch();
    pagenum =pageNumber||1;

    useEffect(() => {

        dispatch(actionCreators.fetchPost(pageNumber));
        window.scrollTo(0, 0);

    }, [ pageNumber]);

    useEffect(()=>{

        if (localStorage.getItem('upvoted')) {

            let localItems = JSON.parse(localStorage.getItem('upvoted'));

            posts.data.hits.forEach((p,i) => {

                localItems.forEach((l,k)=>{
                    if(p.objectID === l.objectID){
                        p.points = l.points;

                        p[i]={...p, p};

                    }
                })

            });

        }
        if (localStorage.getItem('hiddenItem')) {
            let localItems = JSON.parse(localStorage.getItem('hiddenItem'));
            posts.data.hits.forEach((p,i) => {

                localItems.forEach((l,k)=>{
                    if(p.objectID === l.objectID){
                      posts.data.hits.splice(i,1)

                    }
                })

            });
        }

        setPagePost(posts);

    }, [posts])


    return <div>
        {(pagePost && pagePost.data && pagePost.data.hits) ? <Posts posts={pagePost.data.hits} /> : "Loading"}

        {pagePost ? <div className="prev-next">
            {pageNumber > 1 ? <NavLink to={"/" + parseInt(parseInt(pageNumber) - 1)}>Prev</NavLink> : null}
            {pageNumber < pagePost.data.nbPages ? <NavLink to={"/" + parseInt(parseInt(pageNumber) + 1)}>Next</NavLink> : null}
        </div> : null}


        <Graph />

    </div>
}

export const loadData = (store) => {
    return store.dispatch(actionCreators.fetchPost(pagenum));
}

export default {
    loadData,
    component: Home
};