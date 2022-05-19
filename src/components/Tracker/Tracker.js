import React,{Component} from "react";
import fire from "../../config/Fire";
import './Tracker.css';

class Tracker extends Component{

    state = {
        transaction: [],
        money: 0,

        transactionName:'',
        transactionType:'',
        price: '',
        currrentUID: fire.auth().currentUser.uid
    }

    //logout
    logout = () => {
        fire.auth().signOut();
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value !=="0" ? e.target.value : ""
        });
    }

    render(){

        var currentUser=fire.auth().currentUser;
        return(
            <div className="trackerBlock">
                <div className="welcome">
                    <span>Hi, {currentUser.displayName}!</span>
                    <button className="=exit" onClick={this.componentDidCatch.logout}>Exit</button>
                </div>
                <div className="=totalMoney">Rs.145</div>
                <div className="newTransactionBlock">
                    <div className="=newTransaction">
                        <form>
                            <input
                            placeholder="=Transaction Name"
                            type="text"
                            name="transactionName"
                            value= {this.state.transactionName}
                            onChange={this.handleChange('transactionName')}
                            />
                            <div className="=inputGroup">
                                <select name="type"
                                value= {this.state.transactionType}
                                onChange={this.handleChange('transactionType')}>
                                    <option value="0">Type</option>
                                    <option value="expense">Expense</option>
                                    <option value="deposit">Deposit</option>
                                </select>
                                <input
                                    placeholder="=Price"
                                    type="text"
                                    name="price"
                                />
                            </div>
                            <button className="addTarnsaction">+ Add Transaction</button>
                        </form>
                    </div>
                </div>

                <div className="latestTransaction">
                    <p>Latest Transaction</p>
                    <ul>
                        <li>
                            <div>ATM Deposit</div>
                            <div>+ Rs.5</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tracker;