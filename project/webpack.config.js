module.exports = {
  mode: 'production', // 개발모드, none 상황에 따라 설정
  devtool: 'source-map', // 디버그시 위치파악하기 위해 source-map허용
  resolve: {
    // 확장자 추가
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    // loader 추가
    rules: [
      {
        test: /\.ts(x?)$/, // .ts or .tsx
        exclude: /node_modules/, // node_modules 폴더 제외
        use: [
          {
            loader: 'ts-loader', // loader 지정
          },
        ],
      },
      {
        // .js 출력파일 소스맵 처리
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
};
