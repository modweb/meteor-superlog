Tests for the Booster package

    testAsyncMulti 'Superlog - is not undefined', [
      (test, expect) ->
        test.isNotUndefined Superlog
    ]
