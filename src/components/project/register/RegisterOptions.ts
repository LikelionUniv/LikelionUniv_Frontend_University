export const thon = [
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
    { id: 1, isChecked: false, label: 'JAVA' },
    { id: 2, isChecked: false, label: 'JavaScript' },
    { id: 3, isChecked: false, label: 'Spring' },
    { id: 4, isChecked: false, label: 'HTML/CSS' },
    { id: 5, isChecked: false, label: 'Oracle' },
    { id: 6, isChecked: false, label: 'JQuery' },
    { id: 7, isChecked: false, label: 'JSP' },
    { id: 8, isChecked: false, label: 'Vue.js' },
    { id: 9, isChecked: false, label: 'PHP' },
    { id: 10, isChecked: false, label: 'MySQL' },
    { id: 11, isChecked: false, label: 'React' },
    { id: 12, isChecked: false, label: 'Spring Boot' },
    { id: 13, isChecked: false, label: 'Swift' },
    { id: 14, isChecked: false, label: 'Python' },
    { id: 15, isChecked: false, label: 'Node.js' },
    { id: 16, isChecked: false, label: 'C#' },
    { id: 17, isChecked: false, label: 'React Native' },
    { id: 18, isChecked: false, label: '전자정부프레임워크' },
    { id: 19, isChecked: false, label: 'Kotlin' },
    { id: 20, isChecked: false, label: 'MSSQL' },
];
