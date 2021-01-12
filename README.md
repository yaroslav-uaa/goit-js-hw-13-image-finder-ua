Если не работает async await

<!-- /===\ -->

Устанавливаем пакет npm install --save-dev @babel/plugin-transform-runtime
Вносим изменения в файл с настройками Бабеля .babelrc { "presets":
["@babel/preset-env"], "plugins": ["@babel/plugin-proposal-class-properties",
"@babel/plugin-transform-runtime"] }

<!-- /===\ -->
