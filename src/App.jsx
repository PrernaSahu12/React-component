// function Welcome(props){
//   return <h1>Hello, {props.name}!</h1>
// }
// function app(){
// return (
//   <div>
//     <Welcome name="vaishali"/>
//   </div>
// ) 
// }
// export default app

// const { useState, useEffect } = require("react");


// import { useState } from "react";

// function Counter(){
//    const [count, setCount] = useState(0)
//    return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={()=>setCount(count+10)}>Increase</button>
//       <button onClick={()=>setCount(count-1)}>Descrease</button>
//     </div>
//    )
// }
// export default Counter

// function Student(props){
//   return <div>
//     <h2>Name: {props.name} | Age: {props.age} | Course: {props.course}</h2>
//   </div>
// }
// function App(){
//   return <div>
//     <Student name="Vaishali" age ="23"  course = "c++"/>
//         <Student name="Vaishu" age ="33"  course = "python"/>
//     <Student name="Vaishalika" age ="24"  course = "java"/>

//   </div>
// }
//  export default App


import React, { useState } from "react";

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = () => {
        setLoading(true);
        setError(null);

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch data');
                setLoading(false);
                console.error(err);
            });
    };

    const resetData = () => {
        setData(null);
        setError(null);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Mini Data Fetcher</h2>
            <button onClick={fetchData}>Fetch Data</button>
            <button onClick={resetData}>Reset</button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {data ? (
                <div style={{ marginTop: '20px' }}>
                    <h3>Title: {data.title}</h3>
                    <p>{data.body}</p>
                </div>
            ) : (
                !loading && <p>No data fetched yet.</p>
            )}
        </div>
    );
}

export default DataFetcher;
