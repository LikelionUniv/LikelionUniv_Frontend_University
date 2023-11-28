import request from "../../../utils/request"

export interface IDropdown {
  value: number
  label: string
}

interface ICheckbox {
  id: number
  isChecked: boolean
  label: string
}

interface Universities {
  name: string
}

export class Gen {
  static loadAllGen(): IDropdown[] {
    const genOptions: IDropdown[] = [];
    
    // 기수 2023년 기준 11기
    const generate = new Date().getFullYear() - 2012;

    Array.from({length: generate}).forEach((_, index) => {
      genOptions.push({ value: index + 1, label: `${index + 1}기` })
    });

    genOptions.sort((a, b) => b.value-a.value);
    return genOptions;
  } 
};

export class Thon {
  static loadThon(): IDropdown[] {
    const labels = ['아이디어톤', '해커톤', '각 개별 해커톤', '기타'];
    
    const thon: IDropdown[] = labels.map((label, index) => (
      {value: index + 1, label}
    ));

    return thon
  }
}

export class Output {
  static loadOutput(): IDropdown[] {
    const labels = ['WEB', 'ANDROID', 'IOS', '기타'];
    
    const output: IDropdown[] = labels.map((label, index) => (
      {value: index + 1, label}
    ));

    return output
  }
}


export class Tech { 
  static loadTech(): ICheckbox[] {
    const labels = ['JAVA', 'JavaScript', 'Spring', 'HTML/CSS', 'Oracle', 'JQuery', 'JSP', 'Vue.js', 'PHP', 'MySQL', 'React', 'Spring Boot', 'Swift', 'Python', 'Node.js', 'C#', 'React Native', '전자정부프레임워크', 'Kotlin', 'MSSQL'];
    
    const tech: ICheckbox[] = labels.map((label, index) => (
      {id: index + 1, isChecked: false, label}
    ));

    return tech
  }
}

export class Univ {
  static async loadUniv(): Promise<IDropdown[]> {
    const response = await request<null, Universities[], null>({
      uri: '/api/v1/project/university',
      method: 'get',
    });    

    if (response === undefined) {
      throw Error('조회 실패');
    }

    const universities: IDropdown[] = response.data.map((univ, index) => (
      {value: index + 1, label: univ.name}
    ));

    return universities;
  }
}