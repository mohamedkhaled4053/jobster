import styled from 'styled-components'

const Wrapper = styled.aside`
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    transition: var(--transition);
  }
  .content {
    width: var(--fluid-width);
  }
`
export default Wrapper
