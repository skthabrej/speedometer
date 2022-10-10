import { Component } from "react";
import './SpeedoMeter.css'

class SpeedoMeter extends Component {
    state = {count : 0}
    onAccelerate = () => {
        const {count} = this.state
        if (count < 240) {
          this.setState(prevState => ({count: prevState.count + 10}))
        }
      }    
    onBrake = () => {
        const {count} = this.state
        if (count > 0) {
            this.setState(prevState => ({count: prevState.count - 10}))
        }
    }
    render() {
        const {count} = this.state
        return (
            <div className="bg-container">
                <p className="paragraph">Speed is <span className="count-style">{count} </span>MPH</p>
                <p className="min-max-paragraph">min limit is <span className="limits-style">0</span> MPH <br/> max limit is <span className="limits-style">240</span> MPH </p>
                <div className="buttons">
                    <button className="accelrate-button" onClick={this.onAccelerate}>Accelerate</button>
                    <button className="brake-button" onClick={this.onBrake}>Brake</button>
                </div>
            </div>
        )
    }
}
export default SpeedoMeter