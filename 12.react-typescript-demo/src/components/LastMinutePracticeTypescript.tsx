import React, { ChangeEvent, useState } from 'react'

const LastMinutePracticeTypescript = () => {
    const [text, setText] = useState<string>('');
    const [maleFemale, setMaleFemale] = useState<string>('');
    const [age, setAge] = useState<number>(2);

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
        setMaleFemale(e.target.value)
    }

    const onAgeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setMaleFemale(e.target.value)
    }

    return (
        <div>
            <form>
                <input type='text' value={text} onChange={onChangeText}></input>
                <label htmlFor='Gender'>
                    Male<input type='checkbox' checked={maleFemale === 'male'} value={'male'} onChange={onCheckboxClick}></input>
                    Female <input type='checkbox' checked={maleFemale === 'female'} value={'female'} onChange={onCheckboxClick} />
                </label>
                <label>Age</label>
                <select value={age} onChange={onAgeSelect} multiple>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
            </form>
        </div>
    )
}

export default LastMinutePracticeTypescript;