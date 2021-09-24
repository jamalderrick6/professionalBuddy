import React, { Component } from "react";
import { removeUserSession } from "../../Utils/Common";
import { Redirect } from "react-router-dom"; 
import { Button } from "semantic-ui-react"; 



class Logout extends Component {

    state = {
        navigate: false
    };

    logout = () => {
        removeUserSession();
        this.setState({navigate: true});
    };

    render(){
        const {navigate} = this.state;

        if (navigate) {
            return <Redirect to="/" push={true} />;
        }
        return <Button onClick={this.logout}> Log out </Button>
    }
}

export default Logout; 
