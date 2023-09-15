import React, { useState, useEffect } from "react";
import styles from "../customMultiselect/customMultiselect.module.css";

const CustomMultiselect = ({ options, placeholder, onAddFields, isLeft }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectAllEnabled, setSelectAllEnabled] = useState(options.length > 0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (option === "Select All") {
      if (selectedOptions.length === options.length) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions(options);
      }
    } else {
      const isSelected = selectedOptions.includes(option);
      setSelectedOptions((prevState) =>
        isSelected
          ? prevState.filter((item) => item !== option)
          : [...prevState, option]
      );
    }
  };

  useEffect(() => {
    if (onAddFields && isLeft !== undefined) {
      onAddFields(isLeft, selectedOptions);
    }
    setSelectAllEnabled(options.length > 0);
  }, [selectedOptions, options, onAddFields, isLeft]);

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__header} onClick={toggleDropdown}>
        {selectedOptions.length === 0 ? (
          <span className={styles.placeholder}>{placeholder}</span>
        ) : (
          <div className={styles.selectedOptions}>
            {selectedOptions.map((option, index) => (
              <div key={index} className={styles.chip}>
                {option}
                <span
                  className={styles.closeIcon}
                  onClick={() =>
                    setSelectedOptions(
                      selectedOptions.filter((item) => item !== option)
                    )
                  }>
                  &times;
                </span>
              </div>
            ))}
          </div>
        )}
        <span className={styles.dropdown__arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className={styles.dropdown__content}>
          {/* Add the "Select All" option */}
          <div
            className={
              selectedOptions.length === options.length
                ? styles.dropdown__optionSelected
                : styles.dropdown__option
            }
            onClick={() => handleOptionClick("Select All")}
            disabled={!selectAllEnabled}>
            <input
              type="checkbox"
              checked={selectedOptions.length === options.length}
              readOnly
            />
            <label>Select All</label>
          </div>
          {options.map((option, index) => (
            <div
              key={index}
              className={
                selectedOptions.includes(option)
                  ? styles.dropdown__optionSelected
                  : styles.dropdown__option
              }
              onClick={() => handleOptionClick(option)}>
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                readOnly
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomMultiselect;
