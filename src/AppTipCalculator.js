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
    const [bill, setBill] = useState("")
    const [yourSelect, setYourSelect] = useState(0)
    const [friendSelect, setFriendSelect] = useState(0)

    function handleReset() {
        setBill("")
        setYourSelect(0)
        setFriendSelect(0)
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill}/>
            <SelectPercentage title="How did you like the service?" setSelect={yourSelect} onSetSelect={setYourSelect}>

            </SelectPercentage>
            <SelectPercentage title="How did your friend like the service?" setSelect={friendSelect}
                              onSetSelect={setFriendSelect}>

            </SelectPercentage>
            {
                bill > 0 &&
                <>
                    <Output bill={bill} yourSelect={yourSelect} friendSelect={friendSelect}/>
                    <Reset onReset={handleReset}/>
                </>
            }

        </div>
    );
}

function BillInput({bill, onSetBill}) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input type="text" placeholder="Bill value" value={bill} onChange={e => onSetBill(Number(e.target.value))}/>
        </div>
    )
}

function SelectPercentage({title, setSelect, onSetSelect}) {

    return (
        <div>
            <p>
                <label>{title}</label>
                <select value={setSelect} onChange={e => onSetSelect(Number(e.target.value))}>
                    <option value="0">Dissatisfied (0%)</option>
                    <option value="5">It was okay (5%)</option>
                    <option value="10">It was good (10%)</option>
                    <option value="20">Prefect (20%)</option>
                </select>
            </p>
        </div>
    )
}

function Output({bill, yourSelect, friendSelect}) {
    const tip = bill * (yourSelect + friendSelect) * 0.01 * 0.5
    const pay = bill + tip
    return (
        <div>
            <h2>You pay ${pay} (${bill} + ${tip} tip)</h2>
        </div>
    )
}

function Reset({onReset}) {
    return (
        <div>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}
