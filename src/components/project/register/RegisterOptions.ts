export const projectCategory = [
    { value: 1, label: '아이디어톤' },
    { value: 2, label: '해커톤' },
    { value: 3, label: '각 개별 해커톤' },
    { value: 4, label: '기타' },
];

export const output = [
    { value: 1, label: 'APP' },
    { value: 2, label: 'WEB' },
    { value: 3, label: '기타' },
];

export const genOptions: { value: number; label: string }[] = [];
for (let i = 11; i >= 1; i--) {
    genOptions.push({ value: i, label: `${i}기` });
}

export const checkboxes = [
    { id: 1, isChecked: false, label: 'HTML5' },
    { id: 2, isChecked: false, label: 'JAVA' },
    { id: 3, isChecked: false, label: 'Python' },
    { id: 4, isChecked: false, label: 'HTML5' },
    { id: 5, isChecked: false, label: 'JAVA' },
    { id: 6, isChecked: false, label: 'Python' },
    { id: 7, isChecked: false, label: 'HTML5' },
    { id: 8, isChecked: false, label: 'JAVA' },
    { id: 9, isChecked: false, label: 'Python' },
    { id: 10, isChecked: false, label: 'HTML5' },
    { id: 11, isChecked: false, label: 'JAVA' },
    { id: 12, isChecked: false, label: 'Python' },
];
