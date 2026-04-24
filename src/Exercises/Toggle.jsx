import { useState } from "react";

function Toggle () {
    const [isOn, setIsOn] = useState(false)

    return (
        <div>
            <p>The Toggle is {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={() => setIsOn(!isOn)}>
                Toggle
            </button>
        </div>
    );
}

export default Toggle;