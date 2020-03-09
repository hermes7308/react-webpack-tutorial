import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";

class App extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
                <Board value="1" />
            </div>
        );
    }
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));