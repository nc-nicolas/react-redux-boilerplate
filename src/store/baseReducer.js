const initialState = {
  sampleText: 'my sample :)'
}

export const UPDATE_SAMPLE_TEXT = 'BASE/UPDATE_SAMPLE_TEXT';
export const updateSampleText = (newText) => ({
  type: UPDATE_SAMPLE_TEXT,
  newText
});

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_SAMPLE_TEXT:
      return {
        ...state,
        sampleText: action.newText,
      };

    default:
      return state;
  }
}