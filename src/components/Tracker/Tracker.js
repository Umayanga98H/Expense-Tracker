import React,{Component} from "react";
import fire from "../../config/Fire";
import './Tracker.css';

class Tracker extends Component{

    //logout
    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div className="trackerBlock">
                <div className="welcome">
                    <span>Hi, Username!</span>
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
                            />
                            <div className="=inputGroup">
                                <select name="type">
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