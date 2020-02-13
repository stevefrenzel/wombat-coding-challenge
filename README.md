# Wombat Coding Challenge 🐻

## 1. Task 📝

Write a web frontend (ideally using ReactJS), that displays the following information for an arbitrary EOS account:

1. the EOS token balance
2. the value in USD
3. the staked resources for CPU and NET as well as the current consumption
4. the RAM consumption

Please publish your code on GitHub and add some documentation. The code should also be tested. Try to solve the challenge without using any 3rd party libraries.

On the next page you can see the wallet view from the Wombat Android application, which you may use as a reference.

#### References

- [EOSIO API Reference](https://developers.eos.io/manuals/eos/latest/nodeos/plugins/chain_api_plugin/api-reference/index)
- [EOSIO API Endpoint](https://www.eosdocs.io/resources/apiendpoints/)

![Wombat Reference](/reference.jpg)

## 2. Execution 💥

First I created the structure using the reference. In this case the app consists of three main components:

1. `Actions.jsx`
2. `Resources.jsx`
3. `BottomAppBar.jsx`

I used [Material UI](https://material-ui.com/) as a design system and made the components reusable:

1. `Button.jsx`
1. `DataFeedBack.jsx`
1. `IconButton.jsx`
1. `ProgressBar.jsx`
1. `Typography.jsx`

### 2.1 `Actions.jsx`

A relatively simple component, but it required a somewhat more elaborate logic to display the currencies correctly. To display the EOS token balance I just pass the `{core_liquid_balance}` object as property.

To display this value in USD, I had to remove the letters and the white space first. Next I converted this string to a number primitive and multiplied it by 5.26. In the return statement this value is displayed with two decimal places.

```javascript
const convertEosToUsd = string => {
  let noLetters = string.replace(/[^0-9.,]+/, '');
  let decimalNumber = Number(noLetters);
  let usDollar = decimalNumber * 5.26;
  return usDollar.toFixed(2);
};
```

### 2.2 `Resources.jsx`

This component displays various data, so I applied object destructuring to `{userInfo}` for better readability:

```javascript
const {
  cpu_limit,
  net_limit,
  total_resources,
  ram_usage,
  ram_quota
} = userInfo;
```

These objects are being distributed to the respective `dataFeedback.jsx` components. To make sure that the percentage and `ProgressBar.jsx` are displayed correctly, I calculate it by using a function before passing it on as a property:

```javascript
const calculatePercentage = (x, y) => {
  let number = (x / y) * 100;
  return Number(number.toFixed());
};
```

To avoid repeating myself in the `dataFeedback.jsx` component, I calculate the value inside the `progressValue` property, since it is used twice here:

```javascript
<Grid item xs={12} className={classes.dataFeedback}>
  <DataFeedback
    showStaked
    stakedValue={total_resources.net_weight}
    title='NET'
    usedValue={net_limit.used}
    maxValue={net_limit.available}
    unit='KB'
    progressBarColor='secondary'
    progessValue={calculatePercentage(net_limit.used, net_limit.available)}
  />
</Grid>
```

If necessary, I include the boolean `showStaked` if `stakedValue` should be displayed.

### 2.3 `BottomAppBar.jsx`

Apart from the color, I have been able to reproduce this component pretty much exactly as the reference. The only logic here is a dummy clickhandler, which is located in 'App.js`.

## 3. Thoughts 🤔

At first I was very intimidated by this coding challenge, as I'm not very familiar with the blockchain topic and the API documentation overwhelmed me at first. But after I had read it and I knew from which endpoint I could get my data, I made good progress.

The biggest problem for me during the development was that I could not go one level deeper in `{userInfo}` without the program crashing. Access to `{cpu_limit.used}` for example was not possible. The error source was in `App.js':

```javascript
const [userInfo, setUserInfo] = useState([]);
```

After changing the initial value to `null`, I had complete access to the API endpoint. I can't explain exactly why this change solved the problem, but an empty array is truthy in the boolean context, while `null` is falsy.

I really enjoyed this coding challenge, as it included a bit of everything. Especially the conversion from EOS to USD was a very entertaining challenge.
