import React, { Component } from 'react'
import ExpenseConsumer from '../Context'
var uniqid = require("uniqid")
export default class Form extends Component {
    state = {

        title: "",
        amount: 0
    }
    onHandleInput = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        })
    }
    addExpense = (dispatch, e) => {
        e.preventDefault();
        if (e.target.elements.title.value === "" || e.target.elements.amount.value === "") {
            alert("Please fill inputs")
        } else {
            const { title, amount } = this.state;
            const newState = {
                id: uniqid(),
                title,
                amount
            }
            dispatch({ type: "ADD_EXPENSE", payload: newState })
        }


        this.setState({
            title: "",
            amount: ""
        })

    }
    clearAll = (dispatch) => {
        dispatch({ type: "CLEAR_ALL" })
    }

    render() {
        const { title, amount } = this.state;
        return (

            <ExpenseConsumer >
                {value => {
                    const { dispatch } = value
                    return (
                        <div>
                            <button type="button" className="clear" onClick={this.clearAll.bind(this, dispatch)}>Clear All</button>
                            <form onSubmit={this.addExpense.bind(this, dispatch)}>
                                <div className="form-control">
                                    <label htmlFor="text">Text</label>
                                    <input type="text" placeholder="Enter Text" name="title" value={title} onChange={(e) => this.onHandleInput(e)} />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="amount">Amount
                                        <br /> (negative - expense,postive - income)
                                    </label>
                                    <input type="number" placeholder="Enter amount" name="amount" onChange={(e) => this.onHandleInput(e)} value={amount} />
                                </div>
                                <button type="submit" className="btn">Add Transaction</button>
                            </form>

                        </div>
                    )
                }
                }

            </ExpenseConsumer >
        )
    }
}
