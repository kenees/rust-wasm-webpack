wasm-pack build 生成的 pck 目录下缺少 package.json
在 Cargo.toml 中加入如下代码
[package.metadata.wasm-pack.profile.release]
wasm-opt = false

<!-- document -->
<!-- http://www.tutzip.com/tut/rustwasm/game-of-life/implementing.zh.html -->
