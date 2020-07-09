import { FETCH_POST, POST_UPVOTE, HIDE_POST } from "../actions";
const initialState = {}

export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_POST:
            return { ...state, data: action.payload }
        case POST_UPVOTE:
            let updateObj,
            items = state.data.hits,
            localitem;

            items.forEach((item, i) => {

                if (item.objectID === action.payload && localStorage) {
                    let updateItem = { ...item, points: item.points + 1 };

                    if (!localStorage.getItem('upvoted')) {
                        localitem = [{ objectID: item.objectID, points: item.points + 1 }];
                        localStorage.setItem("upvoted", [JSON.stringify(localitem)])

                    } else {
                        localitem=JSON.parse(localStorage.getItem('upvoted'));
                        let foundInStorage=false;

                        localitem.forEach((p, i) => {

                            if (p.objectID === item.objectID) {
                                p.points = p.points + 1;
                                localitem[i] =p;
                                foundInStorage= true;

                            }
                        });
                        if (foundInStorage){
                            localStorage.setItem("upvoted", JSON.stringify(localitem));

                        }else{
                            localitem.push({ objectID: item.objectID, points: item.points + 1 });
                            localStorage.setItem("upvoted", JSON.stringify(localitem));
                        }

                    }



                    items[i] = updateItem;
                    updateObj = { ...items, items }
                }
            });

            return { ...state, updateObj }

            case HIDE_POST:
            let hideObj,
            hideItems = state.data.hits,
            hideFromLocalStorage;

            hideItems.forEach((item, i) => {

                if (item.objectID === action.payload && localStorage) {
                    let updateItem = { ...item };

                    if (!localStorage.getItem('hiddenItem')) {
                        hideFromLocalStorage = [{ objectID: item.objectID }];
                        localStorage.setItem("hiddenItem", [JSON.stringify(hideFromLocalStorage)])

                    } else {
                        hideFromLocalStorage=JSON.parse(localStorage.getItem('hiddenItem'));
                        let foundInStorage=false;

                        hideFromLocalStorage.forEach((p, i) => {

                            if (p.objectID === item.objectID) {

                                hideFromLocalStorage[i] =p;
                                foundInStorage= true;

                            }
                        });
                        if (!foundInStorage){
                            hideFromLocalStorage.push({ objectID: item.objectID});

                        }
                        localStorage.setItem("hiddenItem", JSON.stringify(hideFromLocalStorage));

                    }



                    hideItems[i] = updateItem;
                    hideObj = { ...items, hideItems }
                }
            });
            return { ...state }

        default:
            return state;

    }
}