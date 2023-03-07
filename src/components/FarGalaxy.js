import React, {Component} from 'react';
import {base_url} from "../utils/constants";

class FarGalaxy extends Component {
        constructor(props) {
                super(props);
                this.state = {
                    text: ""
                }

        }

        componentDidMount() {
            let randomId = ((Math.random()*6)+1).toFixed(0);
            fetch(base_url + randomId)
                .then(response => response.json())
                .then(data => this.setState({
                    text: data.opening_crawl
                }));
        }


    render() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
}

export default FarGalaxy;