---
title: Why its the right time to start using styled components
author: Sadique Galaria
date: 2020-01-01
hero: ./images/hero.png
excerpt: All you need to know to get started with styled components
---

Styled components have been around for a while now, and with a number of developers prefering to use css in js, I believe it is the perfect time for anyone looking to up thier skills in react to start using styled components.   

### 1. Installing Styled Components
First, we will need to install it using yarn or npm.

```jsx
//Install styled componenets 
npm i --save styled-components 
```
### 2. Importing Styled Components
Next, open the code editor of your choice and open up the react project for which you installed styled-components.

Then, like for any other library, we need to import styled components to start using it.

```jsx
//import styled componenets 
import styled from 'styled-components'; 
```

### 3. Creating a simple button using Styled Components

A button plays a really important part in a website in general and when used right can make your website look better by ten fold.

So lets write some code to take in a plain old html button, customize it and make it look better. 

First let us create a new React component like so:


```jsx
import React, { Component } from 'react';
    
export default class StyledComponentsIsAwesome extends Component { 
    render() {
        return (
            <div>
                Styled Components is awesome! There, I said it again.  
            </div> 
        )
    }
}

```

Next we will import the styled components as seen in step 2.


```jsx
import React, { Component } from 'react';
import styled from 'styled-components'; //highlight-line
    
export default class StyledComponentsIsAwesome extends Component { 
    render() {
        return (
            <div>
                Styled Components is awesome! There, I said it again.  
            </div> 
        )
    }
}

```

Now to create a new button component (yes, after we create a button as you will see next, we can reuse it as a component like any react component).

We, start by creating a button say HollowButton (I know, I know, you will see why soon).

We will then use the imported styled component as styled.button to create a new button. The backticks here \` `, also refered to as tempelate literals can be used to give our new HollowButton additional styles.

```jsx
import React, { Component } from 'react';
import styled from 'styled-components';
    
const HollowButton = styled.button``
export default class StyledComponentsIsAwesome extends Component { 
    render() {
        return (
            <div>
                Styled Components is awesome! There, I said it again.  
            </div> 
        )
    }
}

```
Well, we just added additional styles to our button and if you are familiar with css, you should have a pretty fair idea of what all of it means.

To summarise it we added a color of tomato for any text that will be added inside the button. Next we added a background color of white to give the button a hollow (kind of) look. Next we added a border of 1px tomato to give it a nice border. We also added some padding and margin to make the button look better. Lastly, we added a cursor of pointer to make the cursor well, be a pointer when the mouse hovers over the button.

```jsx
import React, { Component } from 'react';
import styled from 'styled-components';
    
//highlight-range{1-7}
const HollowButton = styled.button` 
    color: tomato;
    background-color: white;
    border: 1px solid tomato;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;`;
    
export default class StyledComponentsIsAwesome extends Component { 
    render() {
        return (
            <div>
                Styled Components is awesome! There, I said it again.  
            </div> 
        )
    }
}    

```