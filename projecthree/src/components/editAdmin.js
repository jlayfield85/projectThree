import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const admin = props => (
    <tr>
        <td className={props.admin.todo_completed ? 'completed' : ''}>{props.admin.todo_description}</td>
        <td className={props.admin.todo_completed ? 'completed' : ''}>{props.admin.todo_responsible}</td>
        <td className={props.admin.todo_completed ? 'completed' : ''}>{props.admin.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.admin._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/ratemyadmin/')
            .then(response => {
                this.setState({ ratemyadmin: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    adminList() {
        return this.state.ratemyadmin.map(function(currentAdmin, i){
            return <Todo todo={currentAdmin} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Edit List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.adminList() }
                    </tbody>
                </table>
            </div>
        )
    }
}