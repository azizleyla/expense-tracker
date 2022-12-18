import React, { Component } from "react";
import ExpenseConsumer from "../Context";

export default class Balance extends Component {
    render() {
        return (
            <div>
                <ExpenseConsumer>
                    {(value) => {
                        const { expenses } = value;
                        console.log(expenses);
                        return (
                            <div>
                                <h4>Your Balance</h4>

                                <h1> ${expenses.reduce((a, c) => +a + +c.amount, 0).toFixed(2)}</h1>
                            </div>
                        );
                    }}
                </ExpenseConsumer>
            </div>
        );
    }
}
