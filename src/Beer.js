import React from 'react';

class Beer extends React.Component{

    state = {
        liked: false
    }

    handleLike = () => {
        this.setState({
          liked: !this.state.liked
        });
        console.log(this.state.liked)
      }

    render = () =>{
        const label = this.state.liked ? 'Unlike' : 'Like';
        return (
            <div>
            <p> ID: {this.props.id}</p>
            <p>Name: {this.props.name}</p>
            <p>Tagline: {this.props.tagline}</p>
            <p>First Brewed: {this.props.first_brewed}</p>
            <p>Description: {this.props.description}</p>
            <button type="button" onClick={this.handleLike}>{label}</button>
             </div>
        )

    }
}

export default Beer;