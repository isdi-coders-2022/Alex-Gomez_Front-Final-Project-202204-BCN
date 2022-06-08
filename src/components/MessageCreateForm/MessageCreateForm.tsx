import MessageCreateFormStyled from "./MessageCreateFormStyled";

const MessageCreateForm = () => {
  //image, category, text, *author, *likes
  return (
    <MessageCreateFormStyled>
      <form className="createForm">
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="Tradition">Tradition</option>
          <option value="Culture">Culture</option>
          <option value="Leisure">Leisure</option>
          <option value="Gastronomy">Gastronomy</option>
          <option value="Locations">Locations</option>
        </select>

        <label htmlFor="text">Write your message</label>
        <textarea id="text" maxLength={240} cols={30} rows={8} />

        <label htmlFor="image">Upload image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
        />
        <button type="submit" value="Send">
          Publish
        </button>
      </form>
    </MessageCreateFormStyled>
  );
};

export default MessageCreateForm;
