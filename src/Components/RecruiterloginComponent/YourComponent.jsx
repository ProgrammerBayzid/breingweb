// YourComponent.js
import { useState } from "react";
import Picker from 'react-mobile-picker'

const YourComponent = () => {
  const selections = {
    title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
    firstName: ['John', 'Micheal', 'Elizabeth'],
    lastName: ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor']
  }
  const [pickerValue, setPickerValue] = useState({
    title: 'Mr.',
    firstName: 'Micheal',
    lastName: 'Jordan'
  })
  return (
    <Picker value={pickerValue} onChange={setPickerValue}>
      {Object.keys(selections).map(name => (
        <Picker.Column key={name} name={name}>
          {selections[name].map(option => (
            <Picker.Item key={option} value={option}>
              {option}
            </Picker.Item>
          ))}
        </Picker.Column>
      ))}
    </Picker>
  );
};


export default YourComponent;
