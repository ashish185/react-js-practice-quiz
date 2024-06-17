import { CounterProps } from "./Counter.types"

const Counter = (props: CounterProps) => {
    return (
        <div>
            <h1>Counter</h1>
            <p>{props.count}</p>
            {props.handleIncrement && <button onClick={props.handleIncrement}>Increment</button>}
            {props.handleDecrement && <button onClick={props.handleDecrement}>Decrement</button>}
        </div>
    )
}
export default Counter