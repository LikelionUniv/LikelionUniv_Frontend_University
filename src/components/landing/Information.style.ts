import styled from 'styled-components';
import { TrackBoxProps } from './InfoTrack';
import { BoxProps } from './InfoActivity';

export const Outer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f4f6;
`;

export const Wrapper = styled.div`
  width: calc(100% - 80px);
  padding: 160px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1280px) {
    height: auto;
    padding: 140px 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    padding: 80px 0;
  }

  .container {
    @media (max-width: 768px) {
      width: calc(100% - 40px) !important;
      max-width: 520px;
      margin-left: 0;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  color: #212224;
  font-family: Pretendard;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 48px;
  height: 48px;
  &.br {
    display: flex;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      svg {
        margin: 0 10px;
      }
    }
  }
  @media (max-width: 1280px) {
    font-size: 3.6vw;
    height: 3.6vw;
    &.br {
      span {
        height: 3.6vw;
        display: flex;
        align-items: center;
      }
    }
  }
  @media (max-width: 768px) {
    font-size: 28px;
    height: 30px;
    white-space: initial;
    word-break: break-all;
    &.br {
      span {
        height: 30px;
        display: flex;
        align-items: center;
        white-space: nowrap;
      }
    }
  }
  @media (max-width: 480px) {
    &.br {
      height: auto;
      flex-direction: column;
      align-items: flex-start;
      white-space: nowrap;
      span {
        height: 30px;
        display: flex;
        align-items: center;
        margin-bottom: 4px;
      }
      .right {
        margin-left: 0;
      }
    }
  }

  svg {
    flex-shrink: 0;
    margin: 0 8px;
    height: 48px;
    @media (max-width: 1280px) {
      height: 100%;
      width: auto;
      margin: 0 1%;
    }
    @media (max-width: 768px) {
      margin: 0 5px;
    }
  }
`;

export const SubText = styled.div`
  white-space: nowrap;
  color: #212224;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 20px;
  margin: 24px 0 40px 0;
  @media (max-width: 768px) {
    font-size: 16px;
    white-space: initial;
    word-break: keep-all;
    line-height: 150%;
    margin: 4% 0 8% 0;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 165px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .number-rect {
    width: 100%;
    margin-top: 5%;
    .subtitle {
      width: 100%;
      color: #212224;
      font-family: Pretendard;
      font-weight: 700;
      font-size: 24px;
      padding-bottom: 10px;
      border-bottom: 2px solid #212224;
      @media (max-width: 1280px) {
        font-size: 2vw;
      }
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
    .number {
      margin-top: 16px;
      display: flex;
      justify-content: center;
      color: #212224;
      font-family: Pretendard;
      font-weight: 700;
      font-size: 72px;
      sup {
        font-size: 28px;
        line-height: 200%;
        margin-left: 5px;
      }
      @media (max-width: 1280px) {
        font-size: 5.5vw;
        sup {
          font-size: 2vw;
        }
      }
      @media (max-width: 768px) {
        font-size: 32px;
        sup {
          font-size: 14px;
        }
      }
    }
  }
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 165px;

  .swiper-container {
    width: 984px !important;
    @media (max-width: 1280px) {
      width: calc((100vw - 36px) / 3 * 2 + 20px) !important;
    }
    @media (max-width: 768px) {
      width: calc(100vw / 3 * 2 + 12px) !important;
    }
    display: flex;
    overflow-x: visible;
    margin: 0 auto;
  }
  .swiper-wrapper {
    display: flex;
  }
  .swiper-slide {
    width: 480px !important;
    @media (max-width: 1280px) {
      width: calc((100vw - 36px) / 3) !important;
    }
    @media (max-width: 768px) {
      width: 259px !important;
    }
    a {
      text-decoration: none;
    }
    .rect {
      width: 100%;
      aspect-ratio: 48 / 20;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      align-items: center;
    }
    .logo-rect {
      margin: 24px;
      border-radius: 12px;
      width: 31.25%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      @media (max-width: 768px) {
        width: 25%;
        margin: 20px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
      }
    }
    .text-section {
      font-family: Pretendard;
      color: #212224;
      .name {
        color: #212224;
        font-size: 28px;
        font-weight: 600;
        line-height: 200%;
        @media (max-width: 1280px) {
          font-size: 2.2vw;
        }
        @media (max-width: 768px) {
          font-size: 20px;
        }
      }
      .gen {
        font-size: 20px;
        font-weight: 400;
        @media (max-width: 1280px) {
         
        }
        `;