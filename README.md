# pragma-brewery

#### About
Solution that allows to be aware of the current temperature of each container and notifies when the temperatures are outside the correct range.

#### Prerequisites
Make sure you have installed all of the following prerequisites:

Node - <https://nodejs.org/en/download/>  
Chai Assertion Library - <https://www.chaijs.com/guide/installation/#nodejs> - command `npm install chai`

#### How to run
```bash
$ git clone <project>
$ cd <project>
$ node app.js
```
#### Questions

**_What are the highlights of your logic/code writing style?_**
My logic was focused on a simple solution that met all the requirements. This logic was based on the OO paradigm with the well defined scope of each object, as well as the association between them.

**_What could have been done in a better way? What would you do in version 2.0?_**
For future versions, I would improve the user interface so that it is possible to view more friendly and multiple devices solution. Also it would include a sound alert to let the driver know in case of outside the temperature range.

**_What were the questions you would ask and your own answers/assumptions?_**
- Is it necessary to record the temperature history?
> It is not necessary at this time because this record will not be used. But in the future this can be done.

- Is it necessary to configure the types of beer in each container?
> It is not necessary since it would be an extra step If you do not have a specific type of beer just ignore the information.

- Can the beverage refrigeration values ​​be changed? (for example, according to the packaging material or the amount of beverage)
> The beverage refrigeration values ​​will not change.