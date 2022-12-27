var fs = require('fs')

const { readFileSync, promises: fsPromises } = require('fs')
const { callbackify } = require('util')

// let filePath = './design-modern-electrician/web.data.Site.site.json'
// let writeFilePath = './design-modern-electrician/web.data.Site.site.fixed.json'
const source = './sample_templates'

// let json = require(filePath)

// json.folder?.items.map((item, index) => {
//     if (item.url === "home") {
//         item.hidden = false
//     } else if (!item.hasOwnProperty('url')) {
//         item.hidden = item.hidden
//     } else {
//         item.hidden = true
//     }
//     return (
//         console.log(item.hidden)
//     )
// })

// console.log(json.folder.items);
// fs.writeFileSync(writeFilePath, JSON.stringify(json))

const getDirectories = source =>
    fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

console.log(getDirectories(source))

function fixFiles(src){
    for (let i = 0; i < src.length; i++) {
        let singleDirectory = src[i]
        let filePath = `./sample_templates/${singleDirectory}/web.data.Site.site.json`
        let writeFilePath = `./sample_templates/${singleDirectory}/web.data.Site.site.fixed.json`
        
     
        let json = require(filePath)
        json.folder?.items.map((item, index) => {
            if (item.url === "home") {
                item.hidden = false
            } else if (!item.hasOwnProperty('url')) {
                item.hidden = item.hidden
            } else {
                item.hidden = true
            }
            return (
                console.log(item.hidden)
            )
        })
    
        console.log(json.folder.items);
        fs.writeFileSync(writeFilePath, JSON.stringify(json))
    }
}

fixFiles(getDirectories(source))
