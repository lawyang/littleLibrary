import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Home extends Component{

    render(){
        return(
            <header className="App-header">
            <p>
              Easton's little library - Hello Easton
            </p>
            <div>
            <Button href="#pageOne" >
                Link
            </Button>
            </div>
          </header>
        )
    }
}

export default (Home)