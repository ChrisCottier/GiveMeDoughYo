import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../actions/categories";

const CreateCampaign = () => {
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  //categoryId
  //userId
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [campaignPic, setCampaignPic] = useState([]);
  const [story, setStory] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [campaignGoal, setCampaignGoal] = useState("");
  const [perk1Cost, setPerk1Cost] = useState("");
  const [perk2Cost, setPerk2Cost] = useState("");
  const [perk3Cost, setPerk3Cost] = useState("");
  const [perk4Cost, setPerk4Cost] = useState("");
  const [perk5Cost, setPerk5Cost] = useState("");
  const [perk1, setPerk1] = useState("");
  const [perk2, setPerk2] = useState("");
  const [perk3, setPerk3] = useState("");
  const [perk4, setPerk4] = useState("");
  const [perk5, setPerk5] = useState("");

  const { categories } = useSelector((state) => state.categories);
  const { userId, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [token]);
  if (!categories) {
    return null;
  }

  return (
    <main>
      <div className="create-campaign-container container is-widescreen">
        <h1 className="title is-1">Create A Campaign</h1>
        <form>
          <TextInput
            label="Campaign Title"
            placeHolder="Title..."
            value={title}
            handleChange={setTitle}
            require={true}
          ></TextInput>
          <TextInput
            label="Campaign Tagline"
            placeHolder="Tagline..."
            value={tagline}
            handleChange={setTagline}
            require={true}
          ></TextInput>
          <FileInput
            label="Upload Campaign Picture"
            value={campaignPic}
            handleChange={setCampaignPic}
            require={false}
          ></FileInput>
          <CategoryInput
            categories={categories}
            label="Choose A Category"
            value={category}
            handleChange={setCategory}
          ></CategoryInput>
        </form>
      </div>
    </main>
  );
};

const TextInput = (props) => {
  const { label, placeHolder, value, handleChange, require } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          required={require}
        ></input>
      </div>
    </div>
  );
};

const numberInput = () => {};
const FileInput = (props) => {
  const { label, value, handleChange, require } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type="file"
          files={value}
          onChange={handleChange}
          required={require}
        ></input>
      </div>
    </div>
  );
};

const CategoryInput = (props) => {
  const { categories, label, value, handleChange } = props;

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div class="select">
        <select value={value} handleChange={handleChange}>
          {categories.map((category) => (
            <option>{category.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CreateCampaign;
