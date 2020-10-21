# GiveMeDoughYo

GiveMeDoughYo, a clone of the popular Indiegogo, is a crowdfunding application where users can create campaigns, fund and follow others, and receive perks for their conntributions.

Live demo: https://givemedoughyo.herokuapp.com/

## Technologies

- Backend: NodeJS / Express / PostgresSQL
- Frontend: React / Redux
- Amazon AWS, multer S3

## Features

- Secure user authentication using BCrypt hashing.
- Public and private routes that mirror Indiegogo's platform.
- Creation of user campaigns, equipped with tracking statistics.
- Contribution algorithm that allocates perks if users contributions exceed campaign rewards.
- User profile pages diplaying relevant information including: balance, contributions, campaigns created / following, user details.
- Faceted that matches user queries to related campaigns, filterable by campaign category.

### Campaigns

Users can create or browse campaigns on GiveMeDoughYo. Campaigns track contributions, progress, and days remaining.

This code snippet shows how database data is requested through API, then interpreted, and displayed:

```javascript
export const getCampaignInfo = (id) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/campaigns/${id}`);
  const campaignData = await res.json();

  if (res.ok) {
    const perks = perksArray(campaignData);
    campaignData.perks = perks;
    const days = daysLeft(campaignData);
    campaignData.daysLeft = days;
    campaignData.Contributions = campaignData.Contributions.length;
    campaignData.Follows = campaignData.Follows.length;

    dispatch(campaignPage(campaignData));
  }
};

...

export function daysLeft(campaignObj) {
  const today = new Date();
  const then = new Date(campaignObj.createdAt);

  const dif = today.getTime() - then.getTime();

  const difDays = dif / (1000 * 60 * 60 * 24);
  let days = Math.floor(campaignObj.duration - difDays);

  if (days < 0) {
    days = 0;
  }

  return days;
}
```

GIF HERE

### Contributions and Following

If a user has a balance above \$0, they are able to make contributions to any campaign. Validations ensure that the user has large enough balance to make a contribution. If a contribution matches a perk tier for that campaign, the user is awarded that perk. Users can also follow campaigns.

This code snippet shows the logic for creating contributions and rewarding perks:

```javascript
contributionsRouter.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const user = req.user;
    const { amount, campaignId } = req.body;

    let contributor = await User.findByPk(user.id);
    let campaign = await Campaign.findByPk(campaignId);

    if (user.balance < amount || amount <= 0) {
      res.status(400);
      res.ok = false;
      res.json({ message: "Not enough in balance to complete contriution" });
      return;
    }

    contributor.balance -= amount;
    campaign.currentTotal += amount;

    const perk = hasPerk(amount, campaign);

    const contribution = await Contribution.create({
      userId: contributor.id,
      campaignId: campaign.id,
      amount: amount,
      perk,
    });
    await contributor.save();
    await campaign.save();
    campaign.campaignPic = await getS3Url(campaign.campaignPic);

    res.json(campaign);
  })
);

//Imported utility function
const hasPerk = (amount, campaign) => {
  let newPerk = null;
  let cost = 0;

  for (let i = 1; i <= 5; i++) {
    let perkCost = `perk${i}Cost`;
    let perk = `perk${i}`;

    if (
      amount > campaign[perkCost] &&
      campaign[perk] &&
      campaign[perkCost] > cost
    ) {
      newPerk = campaign[perk];
      cost = campaign[perkCost];
    }
  }

  return newPerk;
};
```

CONTRIBUTION GIF

### User Profiles

User profiles are split into 3 displays: profile, campaigns, and contributions. Profile and campaigns are public, displaying the relevant user details / information and created/followed campaigns respectively. The private contributions tab displays the history of contributions a user has made and the perks they were awarded.

USER PROFILE GIF

### Search

A faceted search was implemented to allow users to find campaigns through keywords; matching either the campaign description or its title.
Users can filter results by categories.
SEARCH GIF
