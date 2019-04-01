import mockjs from 'mockjs';

const Random = mockjs.Random;

export default {
  'GET /api/mars/': (req, res) => {
    const { offset, size = 10, total = true } = req.query;
    res.send(
      mockjs.mock({
        [`list|${size}`]: [
          {
            'id|+1': 1000,
            'name|1': ['个人消费贷集合', '个人经营贷集合'],
            date: Random.date(),
            'repaymentType|1': ['等额本息', '季度等额本息'],
            'limit|1': [1000, 10000],
            'order|1-3': 1,
            'time|1': [1, 3, 6, 9, 12],
            timeUnit: 'M',
            title: '@name',
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
