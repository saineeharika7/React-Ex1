import React from 'react';
import Person from './Person'

const NameList = () => {
    const persons = [
        {
            id: 1,
            name: "Flinch",
            age: 50,
            skill: 'React'
        },
        {
            id: 2,
            name: "Reese",
            age: 40,
            skill: 'Vue'
        },
        {
            id: 3,
            name: "Fusco",
            age: 37,
            skill: 'Angular'
        }
    ]
    const personList = persons.map(person => <Person key ={person.id } person={person} />)

    return (
        <div>
            {personList}
        </div>
    );
};

export default NameList;