# Home Assigment - Infinite Scroll and Search Product

This project is implement the infinite scrolling list for display list of products and searching product name.

This project is using API at https://dummyjson.com/docs/products.

## 1. Library using

1. [Reactjs](https://reactjs.org/) v18.2.
2. [Sass language (SCSS)](https://sass-lang.com/).
3. [Tailwind](https://tailwindcss.com/)
4. [Ant-Design](https://ant.design/docs/spec/visualization-page)
5. [Lodash](https://lodash.com/)

## 2. Nodejs environment

- [Nodejs](https://nodejs.org/en/) Please using the node version >= `v16.16.0`.
- Tip: Using [nvm](https://github.com/coreybutler/nvm-windows/releases) to switch the node version.

## 3. Getting started

### 3.1. Clone source

Open your favourite terminal and copy this code

```bash
cd source_folder_path
git clone  https://github.com/huyda1610/assigment-infinite-scroll.git
cd assigment-infinite-scroll
code .
```

### 3.2. Install package

```bash
# If using npm
npm i
# If using yarn
yarn install
```

### 3.3 Start dev server

Open your favourite terminal and copy this code

```bash
# If using npm
npm run dev
# If using yarn
yarn dev
```

Wait and enjoy (^.^)

## 4. Folder structure

```bash
.
├── src
│   ├── core                    # Configuration for the project
│   │   ├── http                # Setting for http
│   │   ├── utils               # Common utility
│   │   ├── models              # Models for core folder
│   ├── pages                   # Website pages folder
│   │   ├── page
│   │   │   ├── components      # Page component
│   │   │   ├── hook            # Page hook
│   │   │   ├── ultils          # Page utility
│   │   │   ├── index.tx        # Page
│   ├── services                # Server setup 
│   ├── styles                  # Styles folder for the project
│   ├── theme                
│   │   ├── themeConfig         # Antd theme config file
│   ├── App.scss                # App style 
│   ├── App.tsx                 # Root app 
│   └── ...                     # 
├── .gitignore                  # Git setup
├── craco.config.js             # Alias setup using craco
├── tailwind.config.js          # Tailwind configuration file
│   └── ...                     # etc
```
