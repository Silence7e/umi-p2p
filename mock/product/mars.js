import mockjs from 'mockjs';

const Random = mockjs.Random;

export default {
  'GET /api/mars/': (req, res) => {
    const { offset, size = 10, total = true } = req.query;
    res.send(
      mockjs.mock({
        [`list|${size}`]: [
          {
            'id|1000000-9000000': 2,
            'name|1': ['个人消费贷集合', '个人经营贷集合'],
            date: '@date("yyyy-MM-dd")',
            'repaymentType|1': ['等额本息', '季度等额本息'],
            'limit|1': [1000, 10000],
            'order|1-3': 1,
            'time|1': [1, 3, 6, 9, 12],
            timeUnit: 'M',
            title: '@name',
            type: 'venus',
            rate: '@float(0, 0, 1, 3)',
            'novice|1-1': true,
            'status|1': [
              {
                value: 'investing',
                desc: '可加入',
              },
              {
                value: 'finished',
                desc: '已完成',
              },
            ],
          },
        ],
        offset: Number(offset),
        size: Number(size),
        total,
      })
    );
  },
};
