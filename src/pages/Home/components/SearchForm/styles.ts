import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;
  margin-top: 1rem;
  width: 50%;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-title']};
    padding: 1rem;
    &::placeholder {
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors['base-text']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-weight: bold;
    border-radius: 6px;
    &:hover {
      background: ${({ theme }) => theme.colors['brand-yellow-dark']};
      border-color: ${({ theme }) => theme.colors['base-text']};
      color: ${({ theme }) => theme.colors['base-white']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
