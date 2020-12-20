import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Store:
import { updateSampleText } from '../../store/baseReducer';

const ReduxSampleLabel = (props) => {

  const dispatch = useDispatch();
  const dispatchSampleUpdate = (newValue) => { dispatch(updateSampleText(newValue)); }
  const sampleText = useSelector((state) => state.baseReducer.sampleText);

  return (
    <div className='centered-container' style={{ flexDirection: 'column' }}>
      <p>This is the sample value:
        <b style={{ marginLeft: 5 }}>{sampleText}</b>
      </p>

      <button onClick={() => { dispatchSampleUpdate('Updated redux from button 😎'); }}>Update</button>
    </div>
  );
}


export default ReduxSampleLabel;