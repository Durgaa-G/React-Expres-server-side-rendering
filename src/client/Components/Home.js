import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Posts from "./Posts";
import Graph from "./Chart"
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../store/actions/index";
import PageLayout from "../HOC/PageLayout"
let pagenum;
const Home = () => {
    const { pageNumber } = useParams();

    const posts = useSelector(state => state.user);
    const [pagePost, setPagePost] = useState();

    const dispatch = useDispatch();
    pagenum =pageNumber?pageNumber:1;

    useEffect(() => {

        dispatch(actionCreators.fetchPost(pagenum));
        window.scrollTo(0, 0);

    }, [ pagenum]);

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
                console.log("on2")
                localItems.forEach((l,k)=>{
                    if(p.objectID === l.objectID){
                        console.log("on3")


                        dispatch(actionCreators.hidePost(p.objectID));
                    }
                })

            });
        }

        setPagePost(posts);

    }, [posts])




    return <div>
        {(pagePost && pagePost.data && pagePost.data.hits) ? <Posts posts={pagePost.data.hits} /> : "Loading"}

        {pagePost ? <div className="prev-next">
            {pagenum > 1 ? <NavLink to={"/" + parseInt(parseInt(pagenum) - 1)}>Prev</NavLink> : null}
            {pagenum < pagePost.data.nbPages ? <NavLink to={"/" + parseInt(parseInt(pagenum) + 1)}>Next</NavLink> : null}
        </div> : null}


        <Graph />

    </div>
}

export const loadData = (store) => {
    return store.dispatch(actionCreators.fetchPost(pagenum));
}

export default {
    loadData,
    component: PageLayout(Home)
};