import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../actions/categories";
import { submitCampaign, CREATE_CAMPAIGN } from "../actions/campaigns";

const CreateCampaign = () => {
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [categoryId, setCategoryId] = useState(1);
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
  //   const { successfulUpload } = useSelector((state) => state.campaigns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [token]);

  //   useEffect(() => {
  //     return () => dispatch({ type: CREATE_CAMPAIGN, successfulUpload: null });
  //   });

  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const campaign = {
      title,
      tagline,
      categoryId,
      userId,
      duration,
      story,
      campaignGoal,
      perk1,
      perk2,
      perk3,
      perk4,
      perk5,
      perk1Cost,
      perk2Cost,
      perk3Cost,
      perk4Cost,
      perk5Cost,
    };

    dispatch(submitCampaign(campaign, campaignPic, token));
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "title": {
        setTitle(event.target.value);
        return;
      }
      case "tagline": {
        setTagline(event.target.value);
        return;
      }
      case "categoryId": {
        setCategoryId(event.target.value);

        return;
      }
      case "duration": {
        setDuration(event.target.value);
        return;
      }
      case "campaignPic": {
        setCampaignPic(event.target.files[0]);
        return;
      }
      case "story": {
        setStory(event.target.value);
        return;
      }
      case "campaignGoal": {
        setCampaignGoal(event.target.value);
        return;
      }
      case "perk1Cost": {
        setPerk1Cost(event.target.value);
        return;
      }
      case "perk2Cost": {
        setPerk2Cost(event.target.value);
        return;
      }
      case "perk3Cost": {
        setPerk3Cost(event.target.value);
        return;
      }
      case "perk4Cost": {
        setPerk4Cost(event.target.value);
        return;
      }
      case "perk5Cost": {
        setPerk5Cost(event.target.value);
        return;
      }
      case "perk1": {
        setPerk1(event.target.value);
        return;
      }
      case "perk2": {
        setPerk2(event.target.value);
        return;
      }
      case "perk3": {
        setPerk3(event.target.value);
        return;
      }
      case "perk4": {
        setPerk4(event.target.value);
        return;
      }
      case "perk5": {
        setPerk5(event.target.value);
        return;
      }
    }
  };

  //   let message;
  //   if (successfulUpload === true) {
  //     alert("Successful Upload!");
  //   } else if (successfulUpload === false) {
  //     alert("Upload unsuccessful");
  //   }

  if (!categories) {
    return null;
  }
  return (
    <main>
      <div className="create-campaign-container container is-widescreen">
        <h1 className="title is-1">Create A Campaign</h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Campaign Title"
            name="title"
            placeHolder="Title..."
            value={title}
            handleChange={handleChange}
            require={true}
          ></TextInput>
          <TextInput
            label="Campaign Tagline"
            name="tagline"
            placeHolder="Tagline..."
            value={tagline}
            handleChange={handleChange}
            require={true}
          ></TextInput>
          <FileInput
            label="Upload Campaign Picture"
            name="campaignPic"
            value={campaignPic}
            handleChange={handleChange}
            require={false}
          ></FileInput>
          <CategoryInput
            categories={categories}
            label="Choose A Category"
            name="categoryId"
            value={categoryId}
            handleChange={handleChange}
          ></CategoryInput>
          <NumberInput
            label="Duration"
            placeHolder="How long would you like to fundraise for?"
            value={duration}
            name="duration"
            handleChange={handleChange}
            required={require}
          ></NumberInput>
          <NumberInput
            label="Campaign Goal"
            placeHolder="What dollar value is your goal?"
            name="campaignGoal"
            value={campaignGoal}
            handleChange={handleChange}
            required={require}
          ></NumberInput>
          <TextAreaInput
            label="Story"
            placeHolder="Type your campaign description here!"
            name="story"
            value={story}
            handleChange={handleChange}
            require={true}
          ></TextAreaInput>
          <h2 className="title is-3">Perks? (Optional) </h2>
          <h2 className="subtitle is-6">
            Please enter perks in ascending oder of cost
          </h2>
          {/* 1 */}
          <NumberInput
            label="Perk 1 Cost"
            placeHolder="How Much?"
            name="perk1Cost"
            value={perk1Cost}
            handleChange={handleChange}
            required={false}
          ></NumberInput>
          <TextInput
            label="Perk 1"
            placeHolder="What is the perk?"
            name="perk1"
            value={perk1}
            handleChange={handleChange}
            required={false}
          ></TextInput>
          {/* 2 */}
          <NumberInput
            label="Perk 2 Cost"
            placeHolder="How Much?"
            name="perk2Cost"
            value={perk2Cost}
            handleChange={handleChange}
            required={false}
          ></NumberInput>
          <TextInput
            label="Perk 2"
            placeHolder="What is the perk?"
            value={perk2}
            name="perk2"
            handleChange={handleChange}
            required={false}
          ></TextInput>
          {/* 3 */}
          <NumberInput
            label="Perk 3 Cost"
            placeHolder="How Much?"
            value={perk3Cost}
            name="perk3Cost"
            handleChange={handleChange}
            required={false}
          ></NumberInput>
          <TextInput
            label="Perk 3"
            placeHolder="What is the perk?"
            value={perk3}
            name="perk3"
            handleChange={handleChange}
            required={false}
          ></TextInput>
          {/* 4 */}
          <NumberInput
            label="Perk 4 Cost"
            placeHolder="How Much?"
            value={perk4Cost}
            name="perk4Cost"
            handleChange={handleChange}
            required={false}
          ></NumberInput>
          <TextInput
            label="Perk 4"
            placeHolder="What is the perk?"
            name="perk4"
            value={perk4}
            handleChange={handleChange}
            required={false}
          ></TextInput>
          {/* 5 */}
          <NumberInput
            label="Perk 5 Cost"
            placeHolder="How Much?"
            value={perk5Cost}
            name="perk5Cost"
            handleChange={handleChange}
            required={false}
          ></NumberInput>
          <TextInput
            label="Perk 5"
            placeHolder="What is the perk?"
            name="perk5"
            value={perk5}
            handleChange={handleChange}
            required={false}
          ></TextInput>
          <button className="button is-primary" type="submit">
            Create Campaign
          </button>
        </form>
      </div>
    </main>
  );
};

const TextAreaInput = (props) => {
  const { label, placeHolder, value, handleChange, require, name } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea
          className="textarea"
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          required={require}
          name={name}
        ></textarea>
      </div>
    </div>
  );
};

const TextInput = (props) => {
  const { label, placeHolder, value, handleChange, require, name } = props;
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
          name={name}
        ></input>
      </div>
    </div>
  );
};

const NumberInput = (props) => {
  const { label, placeHolder, value, handleChange, require, name } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type="number"
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          required={require}
          name={name}
        ></input>
      </div>
    </div>
  );
};

const FileInput = (props) => {
  const { label, value, handleChange, require, name } = props;
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
          name={name}
          accept=".png,.jpg"
        ></input>
      </div>
    </div>
  );
};

const CategoryInput = (props) => {
  const { categories, label, value, handleChange, name } = props;

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="select">
        <select value={value} onChange={handleChange} name={name}>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CreateCampaign;
