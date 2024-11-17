import React, { useEffect, useState } from 'react'
import ImageComponent from './ImageComponent';
import './basis.css';
import { ImageResponseObject } from './states/types';

const Parent = () => {
    const [response, setResponse] = useState<ImageResponseObject[]>([]);
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then(res => setResponse(res)).finally(() => {
            setLoading(false);
        });
    }, []);

    const onButtonClick = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then(res => setResponse(res)).finally(() => {
            setLoading(false);
        });
    };

    const onBtnTitleClick = (title: string) => {
        alert(title);
    }

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const btnText = loading ? 'Loading' : 'Fetch Photos API';
    return (
        <div>
            <input type='text' value={text} placeholder='Search with id' onChange={onChangeText}></input>
            <button onClick={onButtonClick}>{btnText}</button>
            <div className='photos-container'>
                {
                    response.map(albumObj => {
                        const { url = '', title = '', id } = albumObj;
                        return (    
                            <ImageComponent
                                key={id}
                                albumUrl={url}
                                albumId={id}
                                title={title}
                                getTitleBtnClick={onBtnTitleClick}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Parent;