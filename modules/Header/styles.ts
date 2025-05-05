import { styled } from "styled-components";

export const HeaderTopStyle = styled.div`
  background-color: #ebeff3;
  padding: 11px 0;

  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;

    a {
      display: flex;
      align-items: center;
      gap: 13px;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      letter-spacing: 0%;
      color: #545d6a;
      transition: all 0.3s;

      &:hover {
        color: #134e9b;
      }
    }
  }

  nav ~ div {
    display: flex;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;

    a {
      font-weight: 600;
      font-size: 14px;
      line-height: 130%;
      letter-spacing: 0%;
      color: #545d6a;

      &:hover {
        color: #134e9b;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 7px;
      color: #545d6a;
    }
  }

  @media (max-width: 600px) {
    .header-top {
      flex-direction: column;
      align-items: flex-start;
    }

    nav {
      width: 100%;
      justify-content: flex-start;
    }

    nav ~ div {
      width: 100%;
      justify-content: flex-start;
      gap: 15px;
      margin-top: 10px;
    }

    nav a,
    nav ~ div a {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    .header-top {
      flex-direction: column;
    }

    nav {
      width: 100%;
      justify-content: flex-start;
    }

    nav ~ div {
      width: 100%;
      justify-content: flex-start;
    }
  }

  @media (max-width: 768px) {
    .flex {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 50px;
    }

    .text {
      font-size: 28px; 
    }

    .w-full {
      width: 100%;
    }

    .gap-6 {
      gap: 20px; 
    }
  }
`;
