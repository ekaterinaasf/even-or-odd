# Even or Odd

> Don't forget to rewrite this README to describe your project :) Check out these articles to learn more about writing a good README: [makeareadme.com](https://www.makeareadme.com/), [bulldogjob](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project), [meakaakka](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)

## DOM

| tag name    | attributes                             | role                                                                                                        |
| ----------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `<section>` | `id="user-interface" class="centered"` | the section that contains all user interface elements                                                       |
| `<input>`   | `id="input" type="text"`               | the value for user to input                                                                                 |
| `<button>`  | `id='save-button'`                     | button to save current input and verify if the input value _NaNy_ or _Numbery_ and then _Even_ or _Odd_ one |
| `<button>`  | `id="evens-button`                     | button to display only even values from the saved list                                                      |
| `<button>`  | `id='odds-button'`                     | button to display only odds values from the saved list                                                      |
| `<button>`  | `id='nany-button'`                     | button to display only NaNy values from the saved list                                                      |
| `<div>`     | `id="selected"`                        | block with the output values                                                                                |
| `<button>`  | `id="reset-button"`                    | button to reset the current value and empty saved list                                                      |

## Styling

| class name  | description                    | role                                        |
| ----------- | ------------------------------ | ------------------------------------------- |
| `.centered` | sets position for all elements | make block of buttons more user-friendly    |
| `input`     | sets input value style         | make input value more visible               |
| `div`       | sets output list style         | make output displayed in block              |
| `.right`    | sets right column output style | make right column output value more visible |
| `.left`     | sets left column output style  | make left column output value more visible  |

## Listeners

| type      | attached to         | callback       |
| --------- | ------------------- | -------------- |
| `'click'` | `id="save-button"`  | `saveHandler`  |
| `'click'` | `id="evens-button"` | `evensHandler` |
| `'click'` | `id="odds-button"`  | `oddsHandler`  |
| `'click'` | `id="nany-button"`  | `nanyHandler`  |
| `'click'` | `id='reset-button'` | `resetHandler` |

## Handlers

| syntax           | parameters | return value                                    | behavior                                                                                                                                             |
| ---------------- | ---------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `saveHandler()`  | no         | Boolean: should the browser continue as normal? | reads user input save current value and verify if this input value is _NaNy_ or _Numbery_ and then _Even_ or _Odd_ one, alerts the browser 'OK'      |
| `evensHandler()` | no         | Boolean: should the browser continue as normal? | reads previously saved values, then provide only even values to the user and alerts the browser 'OK'                                                 |
| `oddsHandler()`  | no         | Boolean: should the browser continue as normal? | reads previously saved values, then provide only odd values to the user and alerts the browser 'OK'                                                  |
| `nanyHandler()`  | no         | Boolean: should the browser continue as normal? | reads previously saved values, then provide only NaNy values to the user and alerts the browser 'OK'                                                 |
| `resetHandler()` | no         | Boolean: should the browser continue as normal? | reset the user input and current saved numbers to the default state, then provide the result to the user, logs old state and alerts the browser 'OK' |
