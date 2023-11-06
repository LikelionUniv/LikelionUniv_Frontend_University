import { SetStateAction, useState } from 'react';
import Select from 'react-select';
import { OptionType } from './type';

const SortBox = () => {
    const options: OptionType[] = [
        { value: 'new', label: '최신순' },
        { value: 'like', label: '좋아요순' },
        { value: 'comment', label: '댓글순' },
    ];
    const [items, setItems] = useState(options[0]);
    const handleOption = (option: SetStateAction<OptionType>) => {
        setItems(option);
    };
    return (
        <Select
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: '#dcdfe3',
                    height: '40px',
                    color: 'black',
                    width: '106px',
                    borderRadius: '6px',
                }),
                valueContainer: (base, props) => ({
                    ...base,
                    fontSize: '14px',
                    maxWidth: '60px',
                }),
                indicatorsContainer: (base, props) => ({
                    ...base,
                    padding: '0 1px',
                }),
                singleValue: (base, props) => ({
                    ...base,
                    fontSize: '14px',
                    width: '56px',
                }),
                option: (base, props) => ({
                    ...base,
                    backgroundColor: props.isFocused
                        ? '#EAECEE'
                        : props.isSelected
                        ? '#EAECEE'
                        : 'white',
                    color: 'black',
                    borderRadius: '4px',
                    width: '98px',
                    height: '41px',
                    margin: 'auto',
                }),
            }}
            value={items}
            onChange={option => handleOption(option!)}
            options={options}
        />
    );
};

export default SortBox;
