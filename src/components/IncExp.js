import React, { Component } from 'react'
import ExpenseConsumer from '../Context'

export default class IncExp extends Component {
    render() {
        return (

            <ExpenseConsumer>
                {(value) => {
                    const { expenses } = value
                    const amounts = expenses.map(expense => expense.amount)
                    const income = amounts.filter(item => item > 0).reduce((a, c) => a + +c, 0).toFixed(2)
                    const expense = amounts.filter(item => item < 0).reduce((a, c) => a + +c, 0).toFixed(2)
                    return (
                        <div className="inc-exp-container">
                            <div>
                                <h4>Income</h4>
                                <p className="money plus">${income}</p>
                            </div>
                            <div>
                                <h4>Expense</h4>
                                <p className="money minus">${expense}</p>
                            </div>
                        </div>
                    )
                }
                }

            </ExpenseConsumer>


        )
    }
}
