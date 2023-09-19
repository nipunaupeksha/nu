import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import moment from "moment";

const DatePicker = () => {
  const curDate = moment().format("D MMM, YYYY");
  const [value, setValue] = useState({
    startDate: curDate,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Datepicker
      placeholder={value.startDate}
      displayFormat={"D MMM, YYYY"}
      maxDate={new Date()}
      asSingle={true}
      value={value}
      onChange={handleValueChange}
      popoverDirection="down"
      useRange={false}
      readOnly={true}
      containerClassName="w-48 relative"
      toggleClassName="hidden"
      inputClassName="bg-gray-50 justify-center py-2 border border-slate-400 rounded-lg border-black placeholder:text-black placeholder:text-center text-center"
    />
  );
};

export default DatePicker;
