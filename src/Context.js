import React, { Component } from 'react'
const ExpenseContext = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                expenses: [...state.expenses, action.payload]
            }
        case "DELETE_EXPENSE":
            const filteredExpense = state.expenses.filter(e => e.id !== action.payload)
            return {
                expenses: filteredExpense
            }
        case "CLEAR_ALL":
            return {
                expenses: []
            }
        default:
            return state
    }


}
export class ExpenseProvider extends Component {

    state = {
        expenses: [
            { id: 1, title: "Flower", amount: 500 },
            { id: 2, title: "Book", amount: 400 }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }

    }

    render() {
        return (
            <div>
                <ExpenseContext.Provider value={this.state}>
                    {this.props.children}
                </ExpenseContext.Provider>
            </div>
        )
    }
}
const ExpenseConsumer = ExpenseContext.Consumer;
export default ExpenseConsumer

