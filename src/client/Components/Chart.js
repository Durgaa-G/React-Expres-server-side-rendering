import React, { useEffect, useState } from "react";
import { Chart } from 'react-charts';
import { useSelector } from "react-redux";
const Graph = () => {
    let [Data, setData] = useState([])
    const posts = useSelector(state => state.user.data.hits);

    useEffect(() => {
        setData([])
        posts.forEach(data => {
            let NewData = [data.points, data.objectID];
            setData(Data => [...Data, NewData]);
        })


    }, [posts])

    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: Data
            }
        ]
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )
    return (

        <React.Fragment>
            <div
                style={{
                    width: '100%',
                    height: '300px',
                    margin: "50px 0 100px"
                }}


            >
                {<Chart data={[
                    {
                        label: 'Series 1',
                        data: Data
                    }
                ]} axes={axes} />}
            </div>

        </React.Fragment>
    )
}

export default Graph;