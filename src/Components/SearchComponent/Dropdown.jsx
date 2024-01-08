import { useState } from 'react';

const options = ['dhake', 'barishal', 'patuakhali'];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchInput(option); // Update the input field with selected option
    setFilteredOptions(options); // Reset the filtered options
  };

  const handleSearchInput = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredOptions(filtered);
  };

  return (
    <div className="dropdown">
      <input
        type="text"
        value={searchInput}
        onClick={toggleDropdown}
        onChange={handleSearchInput}
        placeholder="Search..."
        className="border"
      />
      {isOpen && (
        <ul className="dropdown-menu h-[10px]">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;


















