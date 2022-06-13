import EmptyListStyled from "./EmptyListStyled";

const EmptyList = (): JSX.Element => {
  return (
    <>
      <EmptyListStyled>
        <p>There are no messages to show</p>
      </EmptyListStyled>
    </>
  );
};

export default EmptyList;
