# hex-color-opacity

[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/dominicegginton/hex-color-opacity/CI/main?label=CI)](https://github.com/dominicegginton/hex-color-opacity/actions)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/dominicegginton/hex-color-opacity)](https://codeclimate.com/github/dominicegginton/hex-color-opacity)
[![npm](https://img.shields.io/npm/dt/hex-color-opacity?label=Downloads)](https://www.npmjs.com/package/hex-color-opacity)
[![js-standard-style](https://img.shields.io/badge/Code%20Style-standard-brightgreen.svg)](http://standardjs.com)

> Lightweight module for adding opacity to hexadecimal colors

## Install

``` shell
npm i hex-color-opacity
```

## Usage

``` js
const opacity = require('hex-color-opacity')

opacity('#ffffff', 0.5)
```


## Documentation

### Adding opacity to hexadecimal color values

To add opacity to a hex color simply pass the color value (this includes the **#** character) and the desired opacity as a number value between 0 and 1 to the opacity function. The resulting hex value is returned. Support for 3 value hex colors is provided. 

For example: 

``` js
opacity('#fff', 0.5) // #ffffff80
```

## Contributing

Contributors are welcome, feel free to submit a new [pull request](https://github.com/dominicegginton/hex-color-opacity/pulls)  to help improve **hex-color-opacity**.
