import React, { useEffect, useState } from "react";
import ko from 'date-fns/locale/ko';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import DatePickerStyle from "./DatePicker.style";
import { FormState } from "./register/ProjectRegister";
import dayjs from 'dayjs';
registerLocale('ko', ko);

interface DatePickerProps {
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  field: keyof FormState;
  defalutValue?: string;
}

function DatePicker({field, setFormState, defalutValue}: DatePickerProps) {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const onChange = (date: Date | null) => {
      const day = dayjs(date);

      setFormState(prev => ({
        ...prev,
        [field]: day.format('YYYY-MM-DD'),
      }))
    };

    if (date !== null) {
      onChange(date);
    }
  }, [date, field, setFormState]);

  useEffect(() => {
    if (defalutValue !== undefined) {    
      setDate(new Date(defalutValue));
    }
  }, [defalutValue]);

  return (
    <DatePickerStyle value={date}>
      <ReactDatePicker locale="ko" selected={date} onChange={(date) => setDate(date)} placeholderText="YYYY-MM-DD" dateFormat="yyyy-MM-dd" className="datepicker" />
    </DatePickerStyle>
  );
}

export default DatePicker;
