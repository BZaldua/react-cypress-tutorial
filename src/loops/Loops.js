import React, {Component} from 'react';

class ListLoop extends Component {

    constructor() {
        super();
        
        this.myArray = ["Uno", "Dos", "Tres", "Cuatro"]
    }

    createList = () => {
        let items = [];

        for(let [index, value] of this.myArray.entries()){
            items.push(<li key={index}>{value}</li>)
        }

        return items;
    }

    render () {
        return (
            <div>
                {this.createList()}
            </div>
        );
    }
}

class TableLoop extends Component {
    constructor() {
        super();

        this.tableElements = ['a', 'b', 'c', 'd'];
    }

    createTable = () => {
        let items = [];

        for(let [index,value] of this.tableElements.entries()){
            items.push(
                <tr>
                    <td value={index}>{value}</td>
                </tr>
            );
        }

        return items;
    }

    render() {
        return(
            <center>
                <table>
                    {this.createTable()}
                </table>
            </center>
        );
    }
}

export {ListLoop, TableLoop};