import * as A from './ApplicationStyle';

interface PhoneNumberFormatterProps {
    phone: string;
    onPhoneChange: (formattedPhone: string) => void;
}

const PhoneNumberFormatter: React.FC<PhoneNumberFormatterProps> = ({
    phone,
    onPhoneChange,
}) => {
    const formatPhoneNumber = (value: string) => {
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 8) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
            3,
            7,
        )}-${phoneNumber.slice(7, 11)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        onPhoneChange(formattedPhoneNumber);
    };

    return (
        <A.Nform
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            maxLength={14}
            placeholder="000-0000-0000"
        />
    );
};

export default PhoneNumberFormatter;
