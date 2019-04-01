import mockjs from 'mockjs';

const Random = mockjs.Random;

export default {
  'GET /api/venus/': (req, res) => {
    const { offset, size = 10, total = true } = req.query;
    res.send(
      mockjs.mock({
        [`list|${size}`]: [
          {
            'id|+1': 1000,
            name: '轻松投',
            date: Random.date(),
            'limit|1': [1000, 10000],
            'order|1-3': 1,
            'time|1': [1, 3, 6, 9, 12],
            timeUnit: 'M',
            title: '@name @time 个月 @date - @order',
            type: 'venus',
            'rate|0-0.1-2': 1,
            'novice|1-1': true,
            status: 'investing',
            statusDesc: '可加入',
          },
        ],
        offset: Number(offset),
        size: Number(size),
        total,
      })
    );
  },
};
