import { useContext } from 'react';
import './index.css';
import { primaryContext } from '../../context/primaryContext';


const CampsDisplay = () => {


  const { camps } = useContext(primaryContext);

  return (
    <div>
      {camps.map((camp) => {
        return <div key={camp._id}>{camp.name}</div>
      })}
    </div>
  )
}

export default CampsDisplay