const fs = require('fs')

const writeFileController = (pathController, moduleName) => {
  fs.writeFile(`${pathController}/${moduleName}.js`, "", function(err) {
    if(err) {
      return console.log(err);
    }
    console.log(`Create ${moduleName} controller file success!`);
  })
}

const writeFileModel = (pathModel, moduleName) => {
  fs.writeFile(`${pathModel}/${moduleName}.js`, "", function(err) {
    if(err) {
      return console.log(err);
    }
    console.log(`Create ${moduleName} model file success!`);
  })
}

const writeFileView = (pathView, moduleName) => {
  fs.writeFile(`${pathView}/${moduleName}.html`, "", function(err) {
    if(err) {
      return console.log(err);
    }
    console.log(`Create ${moduleName} view file success!`);
  })
}

const args = process.argv.slice(2);

if(args[0] === "new_module") {
  const moduleName = args[1]

  const pathController = './Controller/'
  const pathModel = './Model/'
  const pathView = './View/'

  writeFileController(pathController, moduleName)
  writeFileModel(pathModel, moduleName)
  writeFileView(pathView, moduleName)

} else if(args[0] === "new_component") {
  const listFiles = [
    "actions.js",
    "reducer.js",
    "components.js",
    "container.js",
    "types.js",
    "api.js",
    "documents.js",
    "utils.js",
    "styles.js"
  ]
  const moduleName = args[1]
  const pathDir = `./Components/${moduleName}`
  if (!fs.existsSync(pathDir)){
    fs.mkdirSync(pathDir);
    console.log(`Create ${moduleName} module already.`);
    for (let index in listFiles) {
      fs.writeFile(`${pathDir}/${listFiles[index]}`, "", function(err) {
        if(err) {
          return console.log(err);
        }
        console.log(`Create ${listFiles[index]} file success!`);
      })
    }
  }
  else {
    console.log("Failed ! Module name already exist.");
  }
}
else {
  console.log("Not Found Command");
}
