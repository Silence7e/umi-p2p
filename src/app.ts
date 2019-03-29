import createLogger from 'dva-logger';

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
  plugins: [createLogger()],
};
