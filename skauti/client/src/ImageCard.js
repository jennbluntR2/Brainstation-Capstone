import React, { Component } from 'react'


export default class ImageCard extends Component {
  render() {
    return (
        <div>
            <div className='image-card'>
                <img src={ this.props.imageUrl} alt={'image taken on ' + this.props.date}/>
            <div className='image-card__details'>
                
                <p className='project-name'>{ this.props.notes }</p>
           </div>
           </div>
        </div>
    )
  }
}

