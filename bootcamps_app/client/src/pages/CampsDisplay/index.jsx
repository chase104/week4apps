import { useContext } from 'react';
import './index.css';
import { primaryContext } from '../../context/primaryContext';
import axios from 'axios';
import UpdateForm from '../../components/UpdateForm';


const CampsDisplay = () => {


  const { camps, setCamps, campToEdit, setCampToEdit } = useContext(primaryContext);
  console.log(camps);

  const handleDelete = (id) => {
    try{
      axios({
        method: "DELETE",
        url: `/server/camps/${id}`
      }).then(() => {
        // just like when we create on the DB, and add it to frontend state
        // when we delete from DB, we need to remove from frontend state
        let newCamps = camps.filter((camp) => {
          return camp._id !== id;
        })
        // newCamps is all camps except for the deleted one
        setCamps(newCamps);
      })

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>

     {campToEdit &&  <UpdateForm />}

      {camps.map((camp) => {
        return <div key={camp._id} className="camp">
          <h3>{camp.name}</h3>
          <button onClick={() => handleDelete(camp._id)}>DELETE</button>
          <button onClick={() => setCampToEdit(camp)}>Edit</button>
          <p>{camp.stateId.name}</p>
          <p>{camp.price}</p>
          <p>price after tax: {camp.price*(1+camp.stateId.tax)}</p>
        </div>
      })}
    </div>
  )
}

export default CampsDisplay