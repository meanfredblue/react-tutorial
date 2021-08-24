import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            }
        ],
        deletedCharacters: []
    }

    deleteCharacter = (index) => {
        let characters = this.state.characters;
        const character = characters.splice(index, 1);
        let deletedCharacters = this.state.deletedCharacters;

        deletedCharacters.push(character[0]);

        console.log(characters);
        console.log(deletedCharacters);

        this.setState({
            characters: characters,
            deletedCharacters: deletedCharacters
        })

    }

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state

        return (
            <div className="App">
                <h1>Hello, React!</h1>
                <div className="container">
                    <Table characterData={characters} deleteCharacter={this.deleteCharacter} />
                    <Form handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default App