import { useEffect, useState } from "react";
import { LangsProps } from "./Languages.types"

const Languages = (props: LangsProps) => {
    const { languages } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1000)
    }, [])

    return (
        <>
            <ul>{languages.map(lang => <li key={lang}>{lang}</li>)}</ul>
            {isLoggedIn ? <button>Start Course</button> : 
            <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </>
    )
}

export default Languages