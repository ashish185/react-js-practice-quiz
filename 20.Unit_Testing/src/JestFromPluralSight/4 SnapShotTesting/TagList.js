import React from 'react';

export default ({ tags }) => {
    return (
        <div>
            {
                tags.map(tag => <code key={tag}>
                    {tag}
                </code>)
            }
        </div>
    );
};
