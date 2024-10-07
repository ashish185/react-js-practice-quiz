import React from 'react'

interface ImageComponentProps {
    albumUrl: string,
    title: string,
    albumId: number,
    getTitleBtnClick: (title: string) => void
}

const ImageComponent: React.FC<ImageComponentProps> = ({ albumUrl, title, albumId, getTitleBtnClick }) => {
    return (
        <div >
            <img
                className='image'
                src={albumUrl}
                alt='text'
                loading='lazy'
            />
            <div>{albumId}</div>
            <button onClick={() => getTitleBtnClick(title)}>Get Title</button>
        </div>
    )
}
export default ImageComponent;