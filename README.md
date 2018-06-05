# lazysearch-js の React 版テスト実装

## 目的

- React の学習
- 題材として [lazysearch-js](https://github.com/fillin-inc/lazysearch-js) の大体コピー
    - 面倒だったから実際のリクエストは送っていない
    - eslint 未実行
    - テストコードなし

## 使用方法

- `npm start` でサーバ起動
- localhost:3000 でページ表示

## Pure JS 版に対する React 版の比較

### メリット

- 動作が軽い
- 記述するコード量が少ない(気がする)
- データ管理だけ意識すればいいので楽

### デメリット

- build すると lazysearch-js に比べて 3 倍のファイルサイズ
    - 実装完全に終わってないのに
    - React 版: 125kB, lazysearch-js: 40kB
    - 配布するライブラリには向いてなかった
- JSX ちょっと面倒

