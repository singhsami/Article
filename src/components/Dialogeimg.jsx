import React from 'react'
import { Dialog} from "@mui/material"

const Dialogeimg = ({ open, setOpen, data }) => {

    const handleClose = () => {
        setOpen(false)
    }
   
    return (

        <Dialog open={open}
            onClose={handleClose}>

            <button className='crossdlt' onClick={handleClose}>X</button>
            <img src={data.thumb} alt="data" style={{ height:270 }} />

            <div className='popupheading'>
            <h2>{data.title}.</h2>
            <p>{data.short_description}</p><br/>
            <p style={{ marginBottom:20}}>{data.slug}</p>
            </div>

        </Dialog>
    )
}

export default Dialogeimg