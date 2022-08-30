import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    padding-inline: 1rem;
  }

  .container {
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 4rem 1.5rem;
    margin-bottom: 5rem;

    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    th {
      background: #62a3da;
      padding: 1rem 2rem;
    }
    td {
      padding: 1.25rem 2rem;
      font-size: 0.75rem;

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`
