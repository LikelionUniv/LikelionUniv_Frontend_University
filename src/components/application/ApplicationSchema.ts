import * as z from 'zod';

const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/);

export const applicationSchema = z.object({
    name: z
        .string()
        .nonempty('이름을 입력해주세요.')
        .min(2, {
            message: '이름을 입력해주세요.',
        })
        .max(5, {
            message: '이름을 5자 이하로 입력해주세요.',
        }),
    email: z.string().nonempty('이메일을 입력해주세요.').email({
        message: '올바른 이메일 형식이 아닙니다.',
    }),
    universityName: z.string().nonempty('대학교명을 입력해주세요.'),
    major: z.string().nonempty('학과명을 입력해주세요.'),
    phone: z
        .string()
        .nonempty('전화번호를 입력해주세요.')
        .regex(phoneRegex, 'Invalid PhoneNumber'),
    hackathonParts: z.array(z.string()).min(1, '파트를 선택해주세요.'),
    teamName: z
        .string()
        .min(1, {
            message: '1글자 이상 입력해주세요.',
        })
        .max(10, {
            message: '최대 10글자까지 입력가능해요.',
        }),
    offlineParticipation: z
        .boolean()
        .transform(val => {
            if (typeof val === 'boolean') {
                return val;
            }
            if (typeof val === 'string') {
                if (val === 'true') {
                    return true;
                } else if (val === 'false') {
                    return false;
                }
            }
            return false;
        })
        .refine(val => val === true || val === false, {
            message: '참여 여부를 선택해주세요',
        }),
    reasonForNotOffline: z.string().max(100, {
        message: '최대 100자까지 입력가능해요.',
    }),
    // .min(1),
    // .optional(),
    // .nullish(),
});
