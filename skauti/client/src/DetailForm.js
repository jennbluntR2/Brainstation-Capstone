import React, { Component } from 'react'
import firebase from 'firebase/app';
import 'firebase/storage';

export default class DetailForm extends Component {

imageFormHandler = (e) =>{
  e.preventDefault();
  console.log(this);
  let file = this.imageUpload.files[0]
  let storageRef = firebase.storage().ref('user-images/' + file.name);
  let task = storageRef.put(file);
  setTimeout(()=>{
    storageRef.getDownloadURL().then((metadata) => {
        let newProject = this.projectInput.value
        let newNotes = this.notesInput.value
        
        debugger;
        this.props.database.collection('user-id').add({
          imageUpload: (metadata),
          project: {newProject},
          notes: {newNotes},
        })
      })
  }, 1000);
  }

  render() {
    return (
      <div className='details'>
        <div className='upload-notes'>
          <h4>Upload new images here</h4>
          <p>Notes included will appear with the image</p>
          <p>Click Logo to return to Gallery page</p> 
        </div>  
        <form className='detail-form'> 
            <div  className='capture__upload'>
                <input ref={ imageUpload => this.imageUpload = imageUpload } name='imageUpload' type="file" accept="image/*" />
            </div>
            <input  ref={ project => this.projectInput = project }name='projectInput' type='text' maxLength='20' placeholder='Project:' />
            <textarea  ref={ notes => this.notesInput = notes }name='notesInput' type='text' maxLength='200' placeholder='Notes:' />
            <button className='save' name='saveForm' type='submit' onClick={this.imageFormHandler}>save</button>
        </form>

      </div>
    )
  }
}

