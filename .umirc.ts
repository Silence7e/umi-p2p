import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-p2p',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  // routes: [
  //   {
  //     path: '/',
  //     exact: true,
  //     component: './index',
  //   },
  //   {
  //     path: '/account',
  //     exact: true,
  //     component: './account/index',
  //     Routes: ['./src/routes/PrivateRoute.tsx'],
  //   }
  // ]
}

export default config;
