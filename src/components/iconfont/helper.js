/* eslint-disable */
const useGlobalIconFont = () => {
  console.log('process.env.TARO_ENV',process.env.TARO_ENV);
  return {
    iconfont: `components/iconfont/${process.env.TARO_ENV}/${process.env.TARO_ENV}`,
  };
};

// es modules is unavaiable.
module.exports.useGlobalIconFont = useGlobalIconFont;
