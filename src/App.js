import React from "react";
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            data: [],
            loaded: false
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: json,
                    loaded: true
                });
            })
    }
    render() {
        const { loaded, data } = this.state;
        if (!loaded) return <div>
            <h1>Loading....</h1> </div> ;
   
        return (
        <div className = "App">
            {
                data.map((item) => ( 
                <div key = { item.id }>
                <h1>{ item.title }</h1>
                   <img src={ item.url } alt="" id="image"></img>
                    </div>
                ))
            }
        </div>
    );
  }
}
   
export default App;