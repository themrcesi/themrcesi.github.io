import React, { Component } from 'react'

export default class Project extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
        this.categories = props.categories;
        this.text = props.text;
        this.mainPicture = props.mainPicture;
        this.pictures = props.mainPicture.concat(props.pictures);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
