import React, { useContext } from 'react'
import { primaryContext } from '../../context/primaryContext'
import axios from 'axios';

const UpdateForm = () => {


    const { campToEdit, setCampToEdit, states, camps, setCamps } = useContext(primaryContext);
    // let obj = {
    //     updatedAt: "312343124",
    //     _id: "12341324we",
    //     name: "qwerasdf",
    //     stateId: {_id: "12341324", name: "tX"},

    // }

    // submit is different

    // formdata or campToEdit
console.log(campToEdit);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCampToEdit(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(campToEdit);
        let campWithFixedId =  {...campToEdit, stateId: campToEdit.stateId._id}
        console.log(campWithFixedId);
        let response = await axios({
            method: "PUT",
            url: `/server/camps/${campToEdit._id}`,
            data: campWithFixedId // found in req.body
        })
        console.log(response);
        let newCamps = camps.map((camp) => {
            if (camp._id == campToEdit._id) {
                return response.data
            } else {
                return camp
            }
          })
          setCamps(newCamps)
        // update fronted state as well!
    }

  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="stateId">State:</label>
        <select
            id="stateId"
            name="stateId"
            value={campToEdit.stateId._id}
            onChange={handleChange}
        >
            <option value="" disabled>Select a state</option>
            {states.map(state => (
                <option key={state._id} value={state._id}>
                    {state.name}
                </option>
            ))}
        </select>
    </div>
    <div>
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            id="name"
            name="name"
            value={campToEdit.name}
            onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="price">Price:</label>
        <input
            type="number"
            id="price"
            name="price"
            value={campToEdit.price}
            onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor="img">Image URL:</label>
        <input
            type="text"
            id="img"
            name="img"
            value={campToEdit.img}
            onChange={handleChange}
        />
    </div>
    <button type="submit">Submit updates</button>
</form>
  )
}

export default UpdateForm