const Person = (props) => {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
};

const app = (
    <div>
        <Person name="Fabrizio" age="23" />
        <Person name="Marco" age="25" />
    </div>
);

ReactDOM.render(app, document.querySelector('#p1'));