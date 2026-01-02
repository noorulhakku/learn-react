import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>OOPS 🚀</h1>
            <h2>something went wrong 🤔</h2>
            <h2>Status Code: {err.status} </h2>
            <h2>Status Text: {err.statusText} </h2>           
        </div>
    )
}
export default Error;