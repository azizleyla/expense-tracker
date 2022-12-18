import React, { Component } from 'react'
import ExpenseConsumer from '../Context'
import Expense from './Expense'

export default class Expenses extends Component {
    render() {
        return (
            <div>
                <ExpenseConsumer>
                    {value => {
                        const { expenses } = value
                        return (
                            <div>
                                {
                                    expenses.map(expense => {
                                        return (
                                            <Expense key={expense.id} {...expense} />
                                        )
                                    })
                                }
                            </div>
                        )
                    }}
                </ExpenseConsumer>
            </div>
        )
    }
}
