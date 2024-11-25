import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoApi } from '../Services/allApi';

function Add({setAddStatus}) {

    const [show, setShow] = useState(false);
    const [videoDetails , setVideoDetails] = useState({
      caption:"",
      Imgurl:"",
      embededLink:""
    })
    console.log(videoDetails);
    
    // to clear data while clicking cancel
    const handleCancel=()=>{
      setVideoDetails({
        caption:"",
        Imgurl:"",
        embededLink:""
      })
    }

  const handleClose = () => {setShow(false);
      handleCancel()
  }

  const handleShow = () => setShow(true);

 const handleAdd =async()=>{
  const {caption , Imgurl , embededLink} = videoDetails

  if(!caption || !Imgurl || !embededLink){
    toast.info('please fill the form completely')
  }
  else{
    // const result = await addVideoApi(videoDetails)
    // console.log(result);
    if(embededLink.startsWith('https://youtu.be/')){
      let link = `https://www.youtube.com/embed/${embededLink.slice(17,28)}`
      console.log(link);
       const result = await addVideoApi({caption , Imgurl , embededLink:link})
    console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success('video uploded successfully')
      handleClose()
      setAddStatus(result)
     }
     else{
      toast.error('something went wrong')
      handleCancel()
     }
      
    }
    else{
       let link = `https://www.youtube.com/embed/${ embededLink.slice(-11)}`
     
      console.log(link);
      const result = await addVideoApi({caption , Imgurl , embededLink:link})
    console.log(result);
    if(result.status>=200 && result.status<300){
      alert('video uploded successfully')
      handleClose()
      setAddStatus(result)
     }
     else{
      alert('something went wrong')
      handleCancel()
     }
      
    }
    
  }

}

  return (
<>
  <h5><span className='d-md-inline d-none'>Upload New Video</span> <FontAwesomeIcon onClick={handleShow}   icon={faCloudArrowUp}  className='ms-3'/></h5> 

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<p> Please  fill the following details</p>
<form className='border border-secondary p-3 rounded'>
<div className='mb-3'>
  <input type="text" placeholder='Video caption' value={videoDetails.caption} className='form-control' onChange={(e)=>setVideoDetails({...videoDetails, caption:e.target.value})} />   
  
</div>
<div className='mb-3'>
  <input type="text" placeholder='Video Image'  value={videoDetails.Imgurl}  className='form-control' onChange={(e)=>setVideoDetails({...videoDetails, Imgurl:e.target.value})}/>   
  
</div>
<div className='mb-3'>
  <input type="text" placeholder='Video Url'  value={videoDetails.embededLink}  className='form-control' onChange={(e)=>setVideoDetails({...videoDetails, embededLink:e.target.value})} />   
  
</div>
</form>

</Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position= 'top-center' theme='colored' autoClose={2000} />
</>  
)
}

export default Add