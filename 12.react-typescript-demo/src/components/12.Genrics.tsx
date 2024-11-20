import React from 'react';
/* 

The error "Type 'string' is not assignable to type 'never'" occurs when TypeScript cannot infer or properly match the types, often due to missing or overly strict type constraints. Let's fix this step-by-step.
*/
export const GenericsContainer = () => {
    return (
        <div>
            <hr />
            <div>Generics Container</div>
            <ListMakeThemRun items={['Mango', 'Apple', 'Pineapple']} />
            <ListProperSolution items={[1, 2, 3]} />
            <ListProperSolution items={['Mango', 'Apple', 'Pineapple']} />
            <ListProperSolution items={[1, 2, 3]} />
        </div>
    );
};


type ListMakeThemRunProps = {
    items: any[]
}

/* 
 <T extends {}> that means it can accept any object and
 in js typeof[] is also an object
*/
const ListMakeThemRun =({ items = [] }: ListMakeThemRunProps) => {
    return (
        <div>
            {items.map((item) => (
                <div>{item}</div> /* "Type 'string' is not assignable to type 'never' */
            ))}
        </div>
    );
};


type ListProperSolutionProps<T> = {
    items: T[]
}

/* 
 <T extends {}> that means it can accept any object and
 in js typeof[] is also an object
*/
const ListProperSolution = <T,>({ items = [] }: ListProperSolutionProps<T>) => {
    return (
        <div>
            {items.map((item) => (
                <div>{String(item)}</div> /* "Type 'string' is not assignable to type 'never' */
            ))}
        </div>
    );
};
