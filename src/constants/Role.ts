export const Role = Object.freeze({
    GUEST: '게스트',
    USER: '아기사자',
    MANAGER: '운영진',
    UINVERSITY_ADMIN: '대학대표',
    SUPER_ADMIN: '총관리자',
});

// 게스트부터 총관리자까지 인덱스로 우선순위 결정
export const RolePriority = Object.keys(Role);
