import React from 'react';

const Person = ({person}) => {
    return (
        <div>
            <h1>My name is {person.name},My age is {person.age},my skill is {person.skill}</h1>
        </div>
    );
};

export default Person;