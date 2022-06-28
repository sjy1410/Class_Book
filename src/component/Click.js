import React from 'react';
import '../styleComponent/click.css';

export default class Click extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text1: "빈 방"
        };

        this.state = {
            text2: "빈 방"
        };

        this.state = {
            text3: "빈 방"
        };

        this.state = {
            text4: ""
        };
    }

    changeText1 = () => {
        this.setState({
            text1: "예약 됨",
        });
    };

    changeText2 = () => {
        this.setState({
            text2: "예약 됨",
        });
    };

    changeText3 = () => {
        this.setState({
            text3: "예약 됨",
        });
    };

    changeText4 = () => {
        this.setState({
            text4: "예약 됨",
        });
    };

    render() {
        return (
            <div className="App">
                <img src='chair.png'></img>
                <div className='table'>
                <table>
                <tr>
                    <th>2-1 <div><button id="btn" onClick={this.changeText1}>예약</button><h6>{this.state.text1}</h6></div></th>
                    <th>2-2 <div><button id="btn" onClick={this.changeText2}>예약</button><h6>{this.state.text2}</h6></div></th>
                    <th>2-3 <div><button id="btn" onClick={this.changeText3}>예약</button><h6>{this.state.text3}</h6></div></th>
                    <th>2-4 <div><button id="btn" onClick={this.changeText4}>예약</button><h6>{this.state.text4}</h6></div></th>
                </tr>
                </table>
                </div>
                <p>원하는 교실을 버튼을 눌러 예약해 보세요!</p>
            </div>
        );
    }
}