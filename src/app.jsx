import React from 'react';

// Custom components:
import ReduxSampleLabelLabel from './utils/components/ReduxSampleLabel';

const App = (props) => {
  return (
    <div className='centered-container' style={{ flexDirection: 'column' }}>
      <p>Hey there 🍓</p>
      <ReduxSampleLabelLabel />
    </div>
  );
}

export default App;