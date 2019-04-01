const http = require('http');
const mockjs = require('mockjs');

const Random = mockjs.Random;
const size = 10;
const offset = 0;
const total = true;

http
  .createServer((req, res) => {
    res.end(
      JSON.stringify(mockjs.mock({
        [`list|${size}`]: [
          {
            'id|+1': 1000,
            name: '轻松投',
            date: Random.date(),
            'limit|1': [100, 1000, 10000],
            'order|1-3': 1,
            title: '@name @date - @order',
            type: 'venus',
            'rate|0-0.1-2': 1,
            'time|1': [1, 3, 6, 9, 12],
            timeUnit: 'M',
            'novice|1-1': true,
            status: 'investing',
          },
        ],
        offset: Number(offset),
        size: Number(size),
        total,
      })
    ));
  })
  .listen(3000, () => console.log('server is listening on port 3000'));
