import {useState} from "react";
import "./AppTipCalculator.css";

export default function AppTipCalculator() {
    return (
        <div>
            <TipCalculator/>
        </div>
    );
}

function TipCalculator() {
    return (
        <div>
            <BillInput/>
            <SelectPercentage title="How did you like the service?">

            </SelectPercentage>
            <SelectPercentage title="How did your friend like the service?">

            </SelectPercentage>
            <Output/>
            <Reset/>
        </div>
    );
}

function BillInput() {
    return (
        <div>
            <label>How much was the bill?</label>
            <input type="text" placeholder="Bill value"/>
        </div>
    )
}

function SelectPercentage({title}) {
    return (
        <div>
            <p>
                <label>{title}</label>
                <select value="0">
                    <option value="0">Dissatisfied (0%)</option>
                    <option value="5">It was okay (5%)</option>
                    <option value="10">It was good (10%)</option>
                    <option value="20">Prefect (20%)</option>
                </select>
            </p>
        </div>
    )
}

function Output() {
    return (
        <div>
            <h2>You pay $82 ($80 + $12 tip)</h2>
        </div>
    )
}

function Reset() {
    return (
        <div>
            <button value="Reset">Reset</button>
        </div>
    )
}
