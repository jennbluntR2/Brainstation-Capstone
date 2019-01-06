import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import ImageCard from './ImageCard';


export default class Gallery extends Component {
   render() {       
    let picture = this.props.userGallery
    return (
        <div>
        <div className='details-button'>
            <Link to='./details'><img src='/stock-images/camera.png' alt='camera icon'/> </Link>
        </div>
            <div className='image-card__gallery'>
                { picture.map ( (data, i) => {
                    return <ImageCard 
                            imageUrl = { data.imageUpload }
                            project = { data.project.newProject }
                            notes = { data.notes.newNotes }
                            key={ i }
                    />
                })
            } 
            </div>
        </div>
    )
  }
}


