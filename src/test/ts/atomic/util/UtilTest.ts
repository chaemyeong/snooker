import { Fun } from '@ephox/katamari';
import { Option } from '@ephox/katamari';
import Util from 'ephox/snooker/util/Util';
import { UnitTest, assert } from '@ephox/bedrock';

UnitTest.test('UtilTest', function() {
  var eq = function (a, b) {
    return a === b;
  };

  assert.eq([], Util.repeat(0, Fun.constant('a')));
  assert.eq([0] ,Util.repeat(1, Fun.identity));
  assert.eq([0, 1, 2, 3] ,Util.repeat(4, Fun.identity));

  assert.eq([4, 5, 6, 7, 8], Util.range(4, 9));

  assert.eq([], Util.unique([], eq));
  assert.eq([1], Util.unique([1], eq));
  assert.eq([1, 2, 3, 4], Util.unique([1, 1, 2, 2, 2, 3, 4, 4], eq));



  (function () {
    var input1 = [ Option.some(50), Option.some(60), Option.some(75), Option.some(95) ];

    assert.eq(10, Util.deduce(input1, 0).getOrDie('m'));
    assert.eq(15, Util.deduce(input1, 1).getOrDie('o'));
    assert.eq(20, Util.deduce(input1, 2).getOrDie('p'));

    var input2 = [ Option.some(50), Option.none(), Option.some(80), Option.some(120) ];

    assert.eq(15, Util.deduce(input2, 0).getOrDie('input2.test0'));
    assert.eq(15, Util.deduce(input2, 1).getOrDie('input2.test1'));
    assert.eq(40, Util.deduce(input2, 2).getOrDie('input2.test2'));
  })();
});

