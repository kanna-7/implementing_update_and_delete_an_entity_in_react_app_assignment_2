import axios from 'axios';
import React from 'react'
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

const DoorCard = ({door}) => {
    async function deleteDoor(API_URI){
        try {
            await axios.delete(`${API_URI}/{door.id}`)
            alert("Item Deleted Sucessfully");
            getDoors();
        } catch (error) {
            console.log(error);
            alert("something went wrong while deleting door");
        }
    }
  return (
    <div>
      <h3>Name : {door.name}</h3>
      <p>Status : {door.status}</p>
        <div
         style={{
            display:"flex",
            justifyContent:"space-between"
        }}
        
        >
            <button>Edit</button>
            <button
            onClick={deleteDoor}>Delete</button>
        </div>


    </div>
   
  )
}

export default DoorCard