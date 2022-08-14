import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            destination: "Philippines",
            dietaryRestrictions: {
                isVegan: false,
                isLactoseFree: false,
                isKosher: false
            }
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checked" ? this.setState(prevState => {
            return {
                dietaryRestrictions: {
                    ...prevState.dietaryRestrictions,
                    [name]: checked
                }
            }
        }) : this.setState({[name]: value})
    }

    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name"/><br/><br/>
                    <input placeholder="Last Name"/><br/><br/>
                    <input placeholder="Age"/><br/><br/>

                    {/* Create radio buttons for gender here */}
                    <label>
                        <input
                            type={"radio"}
                            value={"male"}
                            checked={this.state.checked === "male"}
                            onChange={this.state.handleChange}
                        />Male
                    </label>
                    <label>
                        <input
                            type={"radio"}
                            value={"female"}
                            checked={this.state.checked === "female"}
                            onChange={this.state.handleChange}
                        />female
                    </label>
                    <br/>
                    <br/>

                    {/* Create select box for location here */}
                    <select
                        value={this.state.destination}
                        name={"destination"}
                        onChange={this.handleChange}
                    >
                        <option value={"Philippines"}>Philippines</option>
                        <option value={"United States Of America"}>United States Of America</option>
                        <option value={"China"}>China</option>
                        <option value={"Russia"}>Russia</option>
                    </select>
                    <br/>
                    <br/>

                    {/* Create check boxes for dietary restrictions here */}
                    <p>Dietary Restrictions</p>
                    <label>
                        <input
                            type={"checkbox"}
                            name={"isVegan"}
                            checked={this.state.dietaryRestrictions.isVegan}
                            onChange={this.handleChange}
                        />Vegan
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestrictions.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <label>
                        <input
                            type={"checkbox"}
                            name={"isKosher"}
                            checked={this.state.dietaryRestrictions.isKosher}
                            onChange={this.handleChange}
                        />Kosher
                    </label>
                    <br/>
                    <br/>


                    <button>Submit</button>
                </form>
                <hr/>
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions:
                    <p>Vegan: {this.state.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {this.state.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>

                </p>
            </main>
        )
    }
}

export default App
