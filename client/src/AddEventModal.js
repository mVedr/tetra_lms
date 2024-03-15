import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from 'react-datetime';
export default function({isOpen, onClose, onEventAdded}){

    const [title,setTitle] = useState("");
    const [start,setStart] = useState(new Date());
    const [end,setEnd] = useState(new Date());

    const onSubmit = (event) =>{
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })

        onClose();
    }

    return(
        <div>
        <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20vh'}}>
        <form onSubmit={onSubmit} style={{width:'50em'}} >
            <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
            <div>
            <label>Start Date </label>
            <Datetime value={start} onChange={date => setStart(date)}/>
            </div>

            <div>
            <label>End Date </label>
            <Datetime value={end} onChange={date => setEnd(date)}/>
            </div>

            <button className="mt-2" style={{padding:'23px 12px', borderRadius:'10px', width:'100%'}}>Add Event</button>
        </form>
</div>
        </Modal>
        </div>
    )
}