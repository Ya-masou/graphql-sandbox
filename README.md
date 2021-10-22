# apollo-server-client-template

Apollo Server + urql の素振り環境

## 依存パッケージをインストール

```sh
yarn install
```

## コード生成

```sh
yarn codegen
```

`graphql` ディレクトリの定義を元に以下のコードを生成する。

- サーバーの Resolver の型定義
- クライアントコード


## REST API の起動

REST API を起動する。

```sh
yarn workspace api start
```

http://localhost:3001 にアクセスする

## Apollo Server の起動

Apollo Server を 起動する。

```sh
yarn workspace server start
```

http://localhost:4000 にアクセスする

## Client Application の起動

Client Application を起動する。

```sh
yarn workspace client dev
```

http://localhost:3000 にアクセスする
