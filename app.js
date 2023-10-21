
// Class #1 | Home Work

const root = ReactDOM.createRoot(document.getElementById("root"));

const parentDiv = React.createElement("div", {className: "parent"},

    [
        React.createElement("h1", {}, "Hello World"),
        React.createElement("p", {}, "This is pera")
    ]

)

const parentDiv2 = React.createElement("div", {className: "wrapper"},
    [
        React.createElement("div", {className: "parent"},
        [
            React.createElement("h1", {className: "parent-title"}, "I am parent"),
            React.createElement("p", {}, "Barir Korta")
        ]
        
        ),

        React.createElement("div", {className: "parent-two"},
        [
            React.createElement("h1", {className: "parent-title"}, "I am parent two"),
            React.createElement("p", {}, "Barir second Korta")
        ]
        
        ),

    ]
)


root.render([parentDiv, parentDiv2]);