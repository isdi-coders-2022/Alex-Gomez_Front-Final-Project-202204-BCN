import MineMessageList from "../../components/MineMessageList/MineMessageList";
import NavBar from "../../components/NavBar/NavBar";
import MineMessageListPageStyled from "./MineMessageListPageStyled";

const MineMessageListPage = () => {
  return (
    <>
      <NavBar />
      <MineMessageListPageStyled>
        <MineMessageList />
      </MineMessageListPageStyled>
    </>
  );
};

export default MineMessageListPage;
