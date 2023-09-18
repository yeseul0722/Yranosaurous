import { StyledCategories } from './Categories.styled';

const Categories = (props: any) => {
  return <StyledCategories {...props}>{props.children}</StyledCategories>;
};

export default Categories;
