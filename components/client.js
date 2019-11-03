'use strict';

// Internal Types
const RPG = require('../');
const Canvas = require('../types/canvas');
const Component = require('@fabric/http/types/component');

class LiteClient extends Component {
  constructor (settings = {}) {
    super(settings);

    this.settings = Object.assign({
      handle: 'rpg-lite-client'
    }, settings);

    this.canvas = new Canvas();
    this.rpg = new RPG(this.settings);

    this._state = {};
  }

  _getInnerHTML () {
    return `<div id="rpg-lite-client"><h1>hello game world!</h1><canvas></canvas></div>`;
  }

  async start () {
    await this.rpg.start();
  }
}

module.exports = LiteClient;