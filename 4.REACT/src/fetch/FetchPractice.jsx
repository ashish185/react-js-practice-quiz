import React from "react";
const FetchPractice = () => {
    const [data, setData] = React.useState({ results: [] });
    const [selectedName, setSelectedName] = React.useState('');

    React.useEffect(() => {
        fetch('https://swapi.dev/api/people/').then((res) => res.json()).then( obj => {
            setData(obj);
        })
    }, []);

    const fetchFilms = (name) => {
        const filmsArr = data.results.find((el) => el.name === name).films;
        Promise.all(
            filmsArr.map((film) => fetch(film).then((res) => res.json()))
        ).then((ans) => {
            console.log('Full', ans);
        });
    }

    const onDropDownChange = (e) => {
        const { results = [] } = data;
        const name= e?.target?.value
        console.log('name', e.target.value);
        setSelectedName(e.target.value);
        fetchFilms(name);
      
    };
    const { results = [] } = data;
    return (
        <div>
            <select onChange={onDropDownChange} value={selectedName}>
                {results.map((obj) => (
                    <option key={obj.name} value={obj.name}>{obj.name}</option>
                ))}
            </select>
        </div>
    );
}

export default FetchPractice;