import request from '../../../utils/request';

export interface IDropdown {
    value: number;
    label: string;
}

interface ICheckbox {
    id: number;
    isChecked: boolean;
    label: string;
}

interface Universities {
    name: string;
}

export class Gen {
    static loadAllGen(): IDropdown[] {
        const genOptions: IDropdown[] = [];

        // 기수 2023년 기준 11기
        const generate = new Date().getFullYear() - 2012;

        Array.from({ length: generate }).forEach((_, index) => {
            genOptions.push({ value: index + 1, label: `${index + 1}기` });
        });

        genOptions.sort((a, b) => b.value - a.value);
        return genOptions;
    }

    static loadRecentFiveGen(): number[] {
        const gen: number[] = [];
        const generate = new Date().getFullYear() - 2012;

        Array.from({ length: generate }).forEach((_, index) => {
            gen.push(index + 1);
        });

        gen.sort((a, b) => b - a);
        return gen.slice(0, 5);
    }

    static loadCurrentGen(currentGen: number) {
        const allGen = Gen.loadAllGen();

        const current = allGen.find(
            gen => gen.value === currentGen,
        ) as IDropdown;
        return current;
    }
}

export class Thon {
    static loadThon(): IDropdown[] {
        const labels = ['아이디어톤', '해커톤', '각 개별 해커톤', '기타'];

        const thon: IDropdown[] = labels.map((label, index) => ({
            value: index + 1,
            label,
        }));

        return thon;
    }

    static loadCurrentThon(currentTon: string): IDropdown {
        const thons = Thon.loadThon();

        const current = thons.find(thon => thon.label === currentTon);
        if (current !== undefined) return current;
        return thons[thons.length - 1];
    }

    static isEtcThon(thon: string) {
        const labels = ['아이디어톤', '해커톤', '각 개별 해커톤'];

        return labels.find(label => label === thon) === undefined;
    }
}

export class Output {
    static loadOutput(): IDropdown[] {
        const labels = ['WEB', 'ANDROID', 'IOS'];

        const output: IDropdown[] = labels.map((label, index) => ({
            value: index + 1,
            label,
        }));

        return output;
    }

    static loadCurrentOutput(currentOutput: string): IDropdown {
        const outputs = Output.loadOutput();

        const current = outputs.find(
            output => output.label === currentOutput,
        ) as IDropdown;
        return current;
    }
}

export class Tech {
    static loadTech(): ICheckbox[] {
        const labels = [
            'JAVA',
            'JavaScript',
            'Spring',
            'HTML/CSS',
            'Oracle',
            'JQuery',
            'JSP',
            'Vue.js',
            'PHP',
            'MySQL',
            'React',
            'Spring Boot',
            'Swift',
            'Python',
            'Node.js',
            'C#',
            'React Native',
            '전자정부프레임워크',
            'Kotlin',
            'MSSQL',
        ];

        const tech: ICheckbox[] = labels.map((label, index) => ({
            id: index + 1,
            isChecked: false,
            label,
        }));

        return tech;
    }

    static loadCurrentTech(currentTech: string[]) {
        const allTech = Tech.loadTech();
        const current = allTech.filter(tech =>
            currentTech.includes(tech.label),
        );

        return current.map(current => current.id);
    }

    static loadEtcTech(currentTech: string[]) {
        const allTechLabels = Tech.loadTech().map(tech => tech.label);
        const etcs = currentTech.filter(tech => !allTechLabels.includes(tech));
        if (etcs.length === 0) return '';
        return etcs.join(', ');
    }
}

export class Univ {
    static async loadUniv(): Promise<IDropdown[]> {
        const response = await request<null, Universities[], null>({
            uri: '/api/v1/university/',
            method: 'get',
        });

        const universities: IDropdown[] = response.data.map((univ, index) => ({
            value: index + 1,
            label: univ.name,
        }));

        return universities;
    }
}
