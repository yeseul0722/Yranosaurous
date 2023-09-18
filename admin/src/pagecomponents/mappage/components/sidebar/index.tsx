import { StyledSidebar } from './Sidebar.styled';

const Sidebar = (props: any) => {
  return <StyledSidebar {...props}>{props.children}</StyledSidebar>;
};

export default Sidebar;
