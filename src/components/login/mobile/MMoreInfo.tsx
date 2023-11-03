import React from "react";
import * as MI from './MMoreInfo.style'
import { useForm } from "react-hook-form";

interface IForm {
  name: string
  university: string
  major: string
}

function MMoreInfo() {
  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data);
  }

  return (
    <>
      <MI.Container>
        <MI.SubHeader>내 정보</MI.SubHeader>
        <MI.Form onSubmit={handleSubmit(onSubmit)}>
          <MI.Field>
            <MI.Label>이름</MI.Label>
            <MI.Input type="text" placeholder="자신의 이름을 작성해주세요."
            {...register('name', {required: true})} />
          </MI.Field>
          <MI.Field>
            <MI.Label>학교</MI.Label>
            <MI.Input type="text" placeholder="학교"
            {...register('university', {required: true})}/>
          </MI.Field>
          <MI.Field>
            <MI.Label>학과</MI.Label>
            <MI.Input type="text" placeholder="학과" 
            {...register('major', {required: true})}/>
          </MI.Field>
          <MI.SaveBtn type="submit" active={isValid}>저장하기</MI.SaveBtn>
        </MI.Form>
      </MI.Container>
    </>
  )
}

export default MMoreInfo