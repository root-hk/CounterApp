import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    function increamentHandler() {
        setCount((count) => {
            return count + value;
        });
    }
    function decreamentHandler() {
        setCount((count) => {
            return count - value;
        });
    }
    function resetHandler() {
        setCount((count) => {
            return (count = 0);
        });
    }
    function changeHandler(event) {
        let increamentValue = Number(event.target.value);
        setValue(increamentValue);
    }
    return (
        <div className="flex flex-col gap-8 justify-center items-center h-screen w-screen bg-[#F3F1E0]">
            <div className="h-[400px] w-[400px] bg-teal-200 rounded-3xl border-slate-700 border-4 flex flex-col items-center justify-evenly ">
                <h1 className="text-7xl font-semibold flex justify-center">Counter</h1>
                <p className="text-8xl">{count}</p>
                <div className="flex gap-9">
                    <button
                        className="text-2xl font-medium p-4 border-slate-700 border-4 rounded-xl bg-cyan-100 hover:bg-cyan-200"
                        onClick={decreamentHandler}
                    >
                        -
                    </button>
                    <button
                        className="text-3xl font-medium p-4 border-slate-700 border-4 rounded-xl bg-cyan-100 hover:bg-cyan-200"
                        onClick={increamentHandler}
                    >
                        +
                    </button>
                    <button
                        className="text-xl font-medium p-4 border-slate-700 border-4 rounded-xl bg-cyan-100 hover:bg-cyan-200"
                        onClick={resetHandler}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div className="flex gap-9 items-center">
                <label htmlFor="increamentValue" className="text-3xl font-medium">
                    Increament and Decreament by:
                </label>
                <input
                    type="number"
                    className="border-slate-700 border-4 rounded-xl p-2 text-2xl font-medium"
                    id="increamentValue"
                    onChange={changeHandler}
                />
            </div>
        </div>
    );
};

export default Counter;
