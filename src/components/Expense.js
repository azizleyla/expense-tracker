import React, { Component } from 'react'
import ExpenseConsumer from '../Context';

export default class Expense extends Component {

    deleteExpense = (dispatch) => {
        const { id } = this.props;
        dispatch({ type: "DELETE_EXPENSE", payload: id })
    }
    render() {
        const { id, title, amount } = this.props;
        return <ExpenseConsumer>
            {value => {
                const { dispatch } = value
                return (
                    <ul className="list">
                        <li key={id} className={amount > 0 ? "plus" : "minus"}>
                            {title}
                            <span>${amount}</span>
                            <button className="delete-btn" onClick={this.deleteExpense.bind(this, dispatch)}> x</button>
                        </li>
                    </ul>
                )
            }}
        </ExpenseConsumer>

    }
}
