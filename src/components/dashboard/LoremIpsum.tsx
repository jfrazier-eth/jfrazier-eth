import * as React from 'react';

interface Props{
    title: string;
}

const LoremIpsum = ({title}: Props) => {
    return(
        <div>{title}</div>
    );
};
export default LoremIpsum;