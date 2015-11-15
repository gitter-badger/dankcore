'use strict';

var should = require('chai').should();
var dankcore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(dankcore.crypto);
    should.exist(dankcore.encoding);
    should.exist(dankcore.util);
    should.exist(dankcore.errors);
    should.exist(dankcore.Address);
    should.exist(dankcore.Block);
    should.exist(dankcore.MerkleBlock);
    should.exist(dankcore.BlockHeader);
    should.exist(dankcore.HDPrivateKey);
    should.exist(dankcore.HDPublicKey);
    should.exist(dankcore.Networks);
    should.exist(dankcore.Opcode);
    should.exist(dankcore.PrivateKey);
    should.exist(dankcore.PublicKey);
    should.exist(dankcore.Script);
    should.exist(dankcore.Transaction);
    should.exist(dankcore.URI);
    should.exist(dankcore.Unit);
  });
});
