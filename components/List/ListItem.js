import styled from 'styled-components'

const ListItem = styled.li`
  position: relative;
  margin-bottom: 0.5rem;
  padding-left: 2rem;
  
  &:before {
    content: '';
    border: 4px solid #cfd8dc;
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translate(0, -50%);
    background: white;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
`

export default ListItem
