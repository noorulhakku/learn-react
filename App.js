/**
 * <div id="parent">
 *      <div id="child">
 *         <h1></ht>
 *      </div>
 * </div>
 * 
 * 
 */
const parent = React.createElement(
"div",{id:"parent"},
    [
        React.createElement(
        "div",{id:"child1"},
            [
            React.createElement(
                "h1","","Hello world first program react"
            ),
            React.createElement(
                "h2","","Hello world first program react"
            ),
            ]
        ),
        React.createElement(
        "div",{id:"child2"},
            [
            React.createElement(
                "h3","","Hello world first program react"
            ),
            React.createElement(
                "h4","","Hello world first program react"
            ),
            ]
        ),
        React.createElement(
        "div",{id:"child3"},
            [
            React.createElement(
                "h5","","Hello world first program react"
            ),
            React.createElement(
                "h6","","Hello world first program react"
            ),
            ]
        )
    ]
);
console.log(parent);
const heading = React.createElement(
"h1", 
{ id:"heading",xyz:"xyz"}, 
"Hello world in React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
