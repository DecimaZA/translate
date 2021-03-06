import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language: language });
    }

    render() {
        return (
            <div className="ui container">
                Select a language: 
                <div>
                    <i className="flag us" 
                        onClick={() => this.onLanguageChange('english')}
                    />
                    <i className="flag nl" 
                        onClick={() => this.onLanguageChange('dutch')} 
                    />
                </div>
                <ColorContext.Provider value='red'>
                    <LanguageContext.Provider value={this.state.language} >    
                            <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;